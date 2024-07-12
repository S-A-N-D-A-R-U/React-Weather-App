import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import day_icon from "../assets/day.svg";
import night_icon from "../assets/night.svg";
import cloudy_day_icon from "../assets/cloudy-day-2.svg";
import cloudy_night_icon from "../assets/cloudy-night-2.svg";
import cloudy_icon from "../assets/cloudy.svg";
import shower_rain_icon from "../assets/rainy-6.svg";
import rain_icon from "../assets/rainy-3.svg";
import thunder_icon from "../assets/thunder.svg";
import snowy_icon from "../assets/snowy-6.svg";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcon = {
    "01d": day_icon,
    "01n": night_icon,
    "02d": cloudy_day_icon,
    "02n": cloudy_night_icon,
    "03d": cloudy_icon,
    "03n": cloudy_icon,
    "04d": cloudy_icon,
    "04n": cloudy_icon,
    "09d": shower_rain_icon,
    "09n": shower_rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": thunder_icon,
    "11n": thunder_icon,
    "13d": snowy_icon,
    "13n": snowy_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcon[data.weather[0].icon] || cloudy_day_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
        setWeatherData(false);
        console.error("error");
    }
  };

  useEffect(() => {
    search("colombo");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity}</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed}Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
