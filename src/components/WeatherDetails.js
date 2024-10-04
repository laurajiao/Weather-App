import React from "react";
import humidityIcon from '../assets/meta_icon/humidity.svg';
import PMIcon from '../assets/meta_icon/PM2.5.svg';
import windIcon from '../assets/meta_icon/wind_speed.svg';
import temperatureIcon from '../assets/meta_icon/Somatosensory_temperature.svg';
import { getWeatherCategory, weatherBackgroundMap, weatherIconsMap,weatherGradient } from "./ImgResources";
import dayjs from 'dayjs'

export default function WeatherDetails({ weatherData }) {
  if (!weatherData) return <p>Loading weather data...</p>; 

  const condition = weatherData.current.condition.text.trim();
  const category = getWeatherCategory(condition);
  const currentIcon = weatherIconsMap[category];
  const currentBackground = weatherBackgroundMap[category];
  const currentWeatherGradient=weatherGradient[category];
  const currentTime=weatherData.location.localtime;
  const formattedData=dayjs(currentTime).format('DD-MM-YYYY dddd HH:mm');

  return (
    <div>
      <div
        className="weather-details my-5 py-3 px-3"
        style={{
          backgroundImage: `${currentWeatherGradient},url(${currentBackground} )`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="local-time text-light">{formattedData}</div>
        <h4 className="location py-3 text-light">{weatherData.location.name}</h4>
        <h3 className="temperature text-light">{parseInt(weatherData.current.temp_c)}&deg;C</h3>
        <p className="temperature-range text-light">
          {parseInt(weatherData.forecast.forecastday[0].day.mintemp_c)}~
          {parseInt(weatherData.forecast.forecastday[0].day.maxtemp_c)}&deg;C
        </p>

        <div className="weather-img">
          <img alt={condition} src={currentIcon} />
        </div>

        <div className="weather-info d-flex">
          <div className="weather-detail-icons">
            <img alt="humidity" src={humidityIcon} className="icon" />
            <span>{weatherData.current.humidity}%</span>
          </div>

          <div className="weather-detail-icons">
            <img alt="wind speed" src={windIcon} className="icon wind" />
            <span>{weatherData.current.wind_kph} km/h</span>
          </div>

          <div className="weather-detail-icons">
            <img alt="pm2.5" src={PMIcon} className="icon pm" />
            <span>{weatherData.current.pressure_in} ug</span>
          </div>

          <div className="weather-detail-icons">
            <img alt="temperature" src={temperatureIcon} className="icon" />
            <span>{weatherData.current.temp_f}&deg;F</span>
          </div>
        </div>
      </div>
    </div>
  );
}

