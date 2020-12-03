import "./search.css";
import axios from "axios";
import "./cityTemperature.css";
import "./weatherInformation.css";
import WeatherInformation from "./weatherInformation";
import React, { useState } from "react";

export default function Search(props) {
  function search() {
    let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
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
          <form onSubmit={handleSubmit} className='mb-3' id='search-city'>
            <div className='row'>
              <div className='col-9'>
                <input
                  type='search'
                  className='form-control'
                  id='cityname'
                  placeholder='Enter a city'
                  onChange={handleInputChange}
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
        <WeatherInformation data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading......";
  }
}
