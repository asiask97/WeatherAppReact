import './Forcast.css'

export default function ForcastDay(props) {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const today = "Today"
    const now = new Date();
    let day = days[ now.getDay()+props.day];
    if(props.day === 0){day = today}
   


    return(
        <div className="forcastDay">
            <p>{day}</p>
            <img>{}</img>
            <p>{Math.round(props.tempDay)}°C</p>
            <p>{Math.round(props.tempNight)}°C</p>
        </div>
    )
}