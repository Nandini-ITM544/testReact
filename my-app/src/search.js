import "./search.css";
import axios from "axios";
import "./cityTemperature.css";
import "./weatherInformation.css";
import WeatherInformation from "./weatherInformation";

import React, { useState } from "react";

export default function Search(props) {
  function search() {
    let apiKey = "524548cb6cd5477e5eb95ca4824b75f3";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading......";
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    let apiKey = "524548cb6cd5477e5eb95ca4824b75f3";
    let units = "metric";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    axios
      .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
      .then(handleResponse);

    return "Loading......";
  }

  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);
  function handleInputChange(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    // console.log(response.data.list[0].main.temp);

    setweatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      realfeel: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      high_temp: Math.round(response.data.main.temp_max),
      low_temp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className='search'>
          <form onSubmit={handleSubmit} className='mb-3' id='search-city'>
            <div className='row'>
              <div className='col-9'>
                <input
                  type='search'
                  className='form-control'
                  style={{ width: "200px" }}
                  id='cityname'
                  placeholder='Enter a city'
                  onChange={handleInputChange}
                />

                <div className='col-3'>
                  <input
                    type='submit'
                    value='Search'
                    className='btn btn-primary'
                  />
                </div>
              </div>
            </div>
          </form>

          <div id='location'>
            <button
              type='button'
              id='current-location'
              onClick={getCurrentLocation}
            >
              Current Location
            </button>
          </div>
        </div>
        <WeatherInformation data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading......";
  }
}
