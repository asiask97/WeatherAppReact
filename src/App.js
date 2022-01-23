import './App.css';
import CurrentBasics from './components/CurrentBasics'
import {useState , useEffect , useCallback} from 'react'
import CurrentAdvanced from './components/CurrentAdvanced';

function App() {
  const key = process.env.REACT_APP_WEATHER_API_KEY
  const [ip, setIP] = useState('');
  const [weatherData, setweatherData] = useState('')
  
  const fetchIP = useCallback(async () => {
    console.log('ip fetch')
    const resp = await fetch('https://jsonip.com',{
      mode: 'cors'
    })
    
    const json = await resp.json()
    setIP(json.ip)
  }, []) 

  const fetchWeather = useCallback(async () => {
      console.log('wether Fetch')
    try{
      //check if ip was fetched
      if(ip == ''){
        throw new Error("No ip was found to display weather")
      }
      //fetch weather data 
      const resp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${ip}&days=5&aqi=yes&alerts=no`,{
        headers:{
          'Access-Control-Allow-Origin':'*'
        }
      })
      //check for correct satus
      if(!resp.ok){
        throw new Error(resp.statusText)
      }
      else{
        const json = await resp.json()
        setweatherData(json)
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
        {weatherData && < CurrentBasics 
          location={weatherData.location.region} 
          temp={weatherData.current.temp_c}
          condition = {weatherData.current.condition.text}
        />}
        {weatherData && < CurrentAdvanced 
          humidity={weatherData.current.humidity}
          percip = {weatherData.current.precip_mm}
          wind = {weatherData.current.wind_kph}
        />}
        <div className='waveSvg'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "rgb(255, 255, 255)"}}></path>
          </svg>
        </div>
        <div className='white'></div>
    </div>
  );
}

export default App;
