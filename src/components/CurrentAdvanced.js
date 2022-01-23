import './CurrentAdvanced.css';

export default function CurrentAdvanced(prop) {
    return(
        <div className="currentAdvanced">
            <p>Humidity: {prop.humidity}%</p>
            <p>Precipitation: {prop.percip}mm </p>
            <p>Wind: {prop.wind}km/h</p>
        </div>
    )
}