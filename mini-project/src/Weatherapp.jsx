import SearchBox from "./Searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){

let [weatherInfo , setWeatherinfo] = useState({
    FEELS_LIKE :"00",
      HUMIDITY : "00",
      TEMP : "0.0",
      MIN_TEMP : "00",
      MAX_TEMP : "00",
      WEATHER : "hot",
      CITY:"Mumbai",
})

let updateinfo = (newinfo)=>{
    setWeatherinfo(newinfo);
}

return ( 
    <div>
          <h3 style={{textAlign:"center"}}>Welcome to Weather daily</h3>
    <SearchBox updateinfo={updateinfo} />    
    <InfoBox info={weatherInfo}/>
    </div>
)
}