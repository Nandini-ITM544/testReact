import React from "react";
import "./search.css";
import axios from "axios";

export default function Search() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;
  let currentCity = "New York";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className='search'>
      <form className='mb-3' id='search-city'>
        <div className='row'>
          <div className='col-9'>
            <input
              type='search'
              className='form-control'
              id='cityname'
              placeholder='Enter a city'
              autofocus='on'
              autocomplete='on'
            />
          </div>

          <div className='col-3'>
            <input type='submit' value='Search' className='btn btn-primary' />
          </div>
        </div>
      </form>

      <div id='location'>
        <button type='button' id='current-location'>
          Current Location
        </button>
      </div>
    </div>
  );
}
