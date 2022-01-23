import './App.css';
import {useState , useEffect , useCallback} from 'react'

function App() {
  const key = process.env.REACT_APP_WEATHER_API_KEY
  const [ip, setIP] = useState('');
  const [currentTep, setCurrentTemp] = useState('')
  
  const fetchIP = useCallback(async () => {
    console.log('ip fetch')
    const resp = await fetch('https://geolocation-db.com/json/')
    const json = await resp.json()
    setIP(json.IPv4)
  }, []) 

  const fetchWeather = useCallback(async () => {
      console.log('wether Fetch')
    try{
      //check if ip was fetched
      if(ip == ''){
        throw new Error("No ip was found to display weather")
      }
      //fetch weather data 
      const resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${ip}&aqi=yes`)
      resp.header("Access-Control-Allow-Origin", "*")
      resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")      //check for correct satus
      if(!resp.ok){
        throw new Error(resp.statusText)
      }
      else{
        const json = await resp.json()
        setCurrentTemp(json.current.temp_c)
      }
    }
    catch(e){
      console.log(e.message)
    }
  }, [ip])

  useEffect( () => {
    fetchIP()
    fetchWeather()
    //empty array cause i want it to run only once
  }, [fetchIP, fetchWeather])
  
  return (
    <div className="App">
        <h2>Your IP Address is</h2>
        <h4>{ip}</h4>
        <h2>Your Temperture is </h2>
        <h4>{currentTep && currentTep}*C</h4>
    </div>
  );
}

export default App;
