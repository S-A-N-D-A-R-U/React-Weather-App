import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png';
import day_icon from '../assets/day.svg';
import cloud_icon from '../assets/cloudy-day-1.svg';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
// import search_icon from '../assets/search.png';
// import search_icon from '../assets/search.png';
// import search_icon from '../assets/search.png';
// import search_icon from '../assets/search.png';


const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type="text"  placeholder='Search' />
            <img src={search_icon}    alt="" />
        </div>
        <img src={cloud_icon} alt="" className='weather-icon'/>
        <p className='temperature'>16°C</p>
        <p className='location'>London</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                    <p>3.6 Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
