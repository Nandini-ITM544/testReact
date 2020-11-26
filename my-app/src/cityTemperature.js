import React from "react";
import "./cityTemperature.css";

export default function CityTemperature() {
  return (
    <div className='city'>
      <h1 className='cityorzip'>New York </h1>
      <h2 id='mainTemperature'>
        <img id='iconElement' src='' alt='Loading...' />
        <span id='temp'></span>
        <span className='symbol'></span>

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
  );
}
