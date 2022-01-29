import './Forcast.css'
import WeatherIcon from './WeatherIcon';

export default function ForcastDay(props) {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let day = days[ props.day];

    return(
        <div className="forcastDay">
            <p>{day}</p>
            <WeatherIcon condition={props.condition} />
            <p>{Math.round(props.tempDay)}°C</p>
            <p>{Math.round(props.tempNight)}°C</p>
        </div>
    )
}