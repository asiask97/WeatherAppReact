import './App.css';
import CurrentBasics from './components/CurrentBasics'
import CurrentAdvanced from './components/CurrentAdvanced';
import Forcast from './components/Forcast';
import { useFetchIP } from './hooks/useFetchIP'
import { useFetchWeather } from './hooks/useFetchWeather'

function App() {
  const ip = useFetchIP()
  const {weatherData:weatherData}  = useFetchWeather(ip)
    
  return (
    <div className="App">
        {weatherData && < CurrentBasics 
          location={weatherData.location.region} 
          temp={weatherData.current.temp_c}
          condition = {weatherData.current.condition.text}
          conditionCode = {weatherData.current.condition.code}
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
        {weatherData && < Forcast data={weatherData}/>}
        <div className='white'></div>
    </div>
  );
}

export default App;
