import React, { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherAPI";
import SearchBar from "./components/SearchBar";
import "./App.css";
import CityCards from "./components/CityCard";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [city, setCity] = useState("Sydney");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const data = await fetchWeather(city);
      setWeatherData(data);
      console.log(data);
    }
    getWeather();
  }, [city]);

  const handleSearchCity = (newCity) => {
    setCity(newCity);

  
  }
  const handleClickCity=(newCity)=>{
    setCity(newCity)
  };


  return (
    <div className="app-container d-flex">
      <div className="App container row gp-4">
        <div className="app-left col-lg-3 col-md-4 ">
          <WeatherDetails weatherData={weatherData} city={city} />
        </div>
        <div className="app-right col-lg-9 col-md-8">
          <WeatherForecast weatherData={weatherData} city={city} />
          <SearchBar onSearch={handleSearchCity} />
          
          <CityCards onCityClick={handleClickCity} />
        </div>
      </div>
    </div>
  );
}

export default App;
