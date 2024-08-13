import React, { useState } from 'react'
import InfoBox from './InfoBox'
import Searchbox from './Searchbox'

export default function WeatherBox() {

    const [weatherinfo,setweatherinfo] = useState({
        city:"Delhi",
        feelslike : 24.84,
        temp:25,
        tempmin:45,
        tempmax:54,
        humidity:"haze",
    })

    let updateinfo = (newinfo)=>{
        setweatherinfo(newinfo)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
        <Searchbox updateinfo = {updateinfo}/>
        <InfoBox info={weatherinfo}/>
    </div>
  )
}
