import React from "react";
import "../App.css";
import { getWeatherCategory, weatherIconsMap } from "./ImgResources";
import dayjs from 'dayjs';

export default function WeatherForecast({ weatherData, city }) {
  if (!weatherData) return <p>Loading weather Data...</p>;
  return (
    <div className="weather-forecast  mt-5 d-flex row">
      {weatherData.forecast.forecastday.slice(1).map((day, index) => {
        const condition = day.day.condition.text.trim();
        const category = getWeatherCategory(condition);
        const weatherIcon = weatherIconsMap[category];
        const futureDay=day.date;
        const formattedDay=dayjs(futureDay).format('dddd');

        return (
          <div key={index} className="forecast-day col-md-2">
            <div className="future-date text-center">{formattedDay}</div>
            <div className="weather-img text-center">
              <img src={weatherIcon} alt={condition} />
            </div>
            <p className="temperature-range text-center">
              {`${parseInt(day.day.mintemp_c)}~${parseInt(day.day.maxtemp_c)}°C`}
            </p>
          </div>
        );
      })}
    </div>
  );
}
