import React, { useState, useEffect } from 'react';
import "../App.css";

import { getWeatherCategory, weatherIconsMap,weatherGradient } from "./ImgResources";
import { fetchWeather } from "../services/weatherAPI";
import SydneyBackground from "../assets/City/Sydney.png";
import ShanghaiBackground from "../assets/City/Shanghai.png";
import NewYorkBackground from "../assets/City/Newyork.png";
import LondonBackground from "../assets/City/London.png";

export default function CityCards({onCityClick}) {
  const mainCities = ['Sydney', 'Shanghai', 'New York', 'London']; 
 
  const [cityWeather, setCityWeather] = useState({}); 
  const cityBackgrounds = {
    "Sydney": SydneyBackground,
    "Shanghai": ShanghaiBackground,
    "New York": NewYorkBackground,
    "London": LondonBackground,
  }

  useEffect(()=>{
    async function fetchCityWeather(){
        const weatherData={};
        for(let city of mainCities){
            const data=await fetchWeather(city);
            const condition = data.current.condition.text.trim();
            const category = getWeatherCategory(condition);
            weatherData[city]={
                icon:weatherIconsMap[category],
                minTemp:parseInt(data.forecast.forecastday[0].day.mintemp_c),
                maxTemp:parseInt(data.forecast.forecastday[0].day.maxtemp_c),
                location:data.location.name,
                background:cityBackgrounds[city],
                backgroundGradient:weatherGradient[category]

            }
           
        }
        setCityWeather(weatherData)
    }

    fetchCityWeather();
  },[]);
return(
    <div className='row city-card d-flex'>
        {Object.keys(cityWeather).map((city)=>(
            <div key={city} className='weather-display col-md-2 mb-3' style={{
              backgroundImage: `${cityWeather[city].backgroundGradient}, url(${cityWeather[city].background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'  
            }} onClick={() => onCityClick(city)}>
                <div className='d-flex justify-content-center'>
                 <img src={cityWeather[city].icon} alt={city}/>
                 </div>
                <h5 className='text-center text-light'>{cityWeather[city].location}</h5>
               
                <p className='text-center text-light'>{`${cityWeather[city].minTemp}~${cityWeather[city].maxTemp}°C`}</p>
                </div>))}
  
    </div>
)
 
};