import "./search.css";
import axios from "axios";
import "./cityTemperature.css";
import React, { useState } from "react";

export default function Search() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("Paris");
  function handleResponse(response) {
    // console.log(response.data.list[0].main.temp);
    setTemperature(Math.round(response.data.list[0].main.temp));
    setCity(response.data.city.name);
    setReady(true);
    // setTemperature(response.data.main.temp);
  }
  // let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
  // //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;
  // let currentCity = "New York";
  // let units = "metric";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&units=${units}`;
  // axios.get(apiUrl).then(handleResponse);

  if (ready) {
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
          <h1 className='cityorzip'>{city}</h1>
          <h2 id='mainTemperature'>
            <img id='iconElement' src='' alt='Loading...' />
            <span id='temp'>{temperature}</span>
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
      </div>
    );
  } else {
    let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;
    let currentCity = "New York";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading......";
  }
}
