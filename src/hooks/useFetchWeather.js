import { useEffect, useState } from "react";
const key = process.env.REACT_APP_WEATHER_API_KEY

export const useFetchWeather = (ip) => {
    const [weatherData, setweatherData] = useState('')

    useEffect( () => {
      
      const fetchData = async()=>{
        try{
          
          //check if ip was fetched
          if(ip === ''){
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
  
      }
      fetchData()
    },[ip])
    return {weatherData:weatherData}
}
