import './Forcast.css'
import ForcastDay from "./ForcastDay"

export default function Forcast(prop) {

    const data = prop.data
    console.log(data.forecast.forecastday)
    return(
        <div className="forcast">
            < ForcastDay 
                tempDay={data.forecast.forecastday[0].day.maxtemp_c}
                tempNight={data.forecast.forecastday[0].day.mintemp_c}
                condition={data.forecast.forecastday[0].day.condition.code}
                day = {0}
            />
            < ForcastDay 
                tempDay={data.forecast.forecastday[1].day.maxtemp_c}
                tempNight={data.forecast.forecastday[1].day.mintemp_c}
                condition={data.forecast.forecastday[1].day.condition.code}
                day = {1}
            />
            < ForcastDay 
                tempDay={data.forecast.forecastday[2].day.maxtemp_c}
                tempNight={data.forecast.forecastday[2].day.mintemp_c}
                condition={data.forecast.forecastday[2].day.condition.code}
                day= {2}
            />

        </div>
    )
}