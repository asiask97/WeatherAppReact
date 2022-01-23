import './CurrentBasics.css'

export default function CurrentBasics(prop) {
    return(
        <div className="currentBasics">
            <h3>{prop.location}</h3>
            <h2>{prop.temp}°C</h2>
            <h4>{prop.condition}</h4>
        </div>
    )
}