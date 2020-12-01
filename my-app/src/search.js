import React from "react";
import "./search.css";

export default function Search() {
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
