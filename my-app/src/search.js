import "./search.css";
import axios from "axios";
import "./cityTemperature.css";
import "./weatherInformation.css";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    // console.log(response.data.list[0].main.temp);
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: Math.round(response.data.list[0].main.temp),
      humidity: Math.round(response.data.list[0].main.humidity),
      wind: Math.round(response.data.list[0].wind.speed),
      realfeel: Math.round(response.data.list[0].main.feels_like),
      date: new Date(response.data.list[0].dt * 1000),
      city: response.data.city.name,
      high_temp: Math.round(response.data.list[0].main.temp_max),
      low_temp: Math.round(response.data.list[0].main.temp_min),
      description: response.data.list[0].weather[0].description,
      // icon:,
    });
    //  setTemperature(Math.round(response.data.list[0].main.temp));
    //  setCity(response.data.city.name);
    //setReady(true);
    // setTemperature(response.data.main.temp);
  }
  // let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
  // //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;
  // let currentCity = "New York";
  // let units = "metric";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&units=${units}`;
  // axios.get(apiUrl).then(handleResponse);

  if (weatherData.ready) {
    return (
      <div>
        <div className='search'>
          <form className='mb-3' id='search-city'>
            <div className='row'>
              <div className='col-9'>
                <input
                  type='search'
                  className='form-control'
                  id='cityname'
                  placeholder='Enter a city'
                  // autofocus='on'
                  // autocomplete='on'
                />
              </div>

              <div className='col-3'>
                <input
                  type='submit'
                  value='Search'
                  className='btn btn-primary'
                />
              </div>
            </div>
          </form>

          <div id='location'>
            <button type='button' id='current-location'>
              Current Location
            </button>
          </div>
        </div>
        <div className='city'>
          <h1 className='cityorzip'>{weatherData.city}</h1>
          <h2 id='mainTemperature'>
            <img
              id='iconElement'
              src={weatherData.icon}
              alt={weatherData.description}
            />
            <span id='temp'>{weatherData.temperature}</span>
            <span className='symbol'>°C</span>

            <div className='btn-group btn-group-toggle' data-toggle='buttons'>
              <label className='btn btn-secondary active' id='celsius'>
                <input
                  type='radio'
                  name='options'
                  id='option1'
                  autocomplete='off'
                />
                C
              </label>
              <label className='btn btn-secondary' id='farenheit'>
                <input
                  type='radio'
                  name='options'
                  id='option2'
                  autocomplete='off'
                />
                F
              </label>
            </div>
          </h2>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='card information'>
              <div className='card-body'>
                <p className='card-text' id='currenttime'>
                  <FormattedDate defaultdate={weatherData.date} />
                </p>

                <p className='card-text'>
                  Highest for the day:{" "}
                  <span id='high-temp'>{weatherData.high_temp}°C</span>
                </p>
                <p className='card-text'>
                  Lowest for the day:{" "}
                  <span id='low-temp'>{weatherData.low_temp}°C</span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card ex information'>
              <div className='card-body'>
                <p className='card-text'>
                  Real Feel:{" "}
                  <span id='real-feel'>{weatherData.realfeel}°C</span>
                </p>
                <p className='card-text'>
                  Humidity: <span id='humid'>{weatherData.humidity}</span>%
                </p>
                <p className='card-text'>
                  Wind: NE <span id='wind'>{weatherData.wind}</span>mph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.defaultcity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading......";
  }
}
