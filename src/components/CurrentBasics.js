import './CurrentBasics.css'
import WeatherIcon from './WeatherIcon'

export default function CurrentBasics(prop) {
    return(
        <div className="currentBasics">
            <h3>{prop.location}</h3>
            <h2>{Math.round(prop.temp)}°C</h2>
            <WeatherIcon condition={prop.conditionCode}/>
            <h4>{prop.condition}</h4>
        </div>
    )
}