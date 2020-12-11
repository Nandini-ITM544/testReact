import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function converToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span id='temp'>{props.temp}</span>
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
              onClick={converToF}
            />
            F
          </label>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.temp * 9) / 5 + 32);
    return (
      <div>
        <span id='temp'>{fahrenheit}</span>
        <span className='symbol'>°F</span>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-secondary' id='celsius'>
            <input
              type='radio'
              name='options'
              id='option1'
              autocomplete='off'
              onClick={convertToC}
            />
            C
          </label>
          <label className='btn btn-secondary active' id='farenheit'>
            <input
              type='radio'
              name='options'
              id='option2'
              autocomplete='off'
            />
            F
          </label>
        </div>
      </div>
    );
  }
}
