import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./weatherInformation.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  console.log(props);
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
        <div>
          <span id='temp'>{props.temp.temperature}</span>
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
        <div className='row'>
          <div className='col-sm-6'>
            <div className='card information'>
              <div className='card-body'>
                <p className='card-text' id='currenttime'>
                  <FormattedDate defaultdate={props.temp.date} />
                </p>

                <p className='card-text'>
                  Highest for the day:{" "}
                  <span id='high-temp'>{props.temp.high_temp}°C</span>
                </p>
                <p className='card-text'>
                  Lowest for the day:{" "}
                  <span id='low-temp'>{props.temp.low_temp}°C</span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card ex information'>
              <div className='card-body'>
                <p className='card-text'>
                  Real Feel: <span id='real-feel'>{props.temp.realfeel}°C</span>
                </p>
                <p className='card-text'>
                  Humidity: <span id='humid'>{props.temp.humidity}</span>%
                </p>
                <p className='card-text'>
                  Wind: NE <span id='wind'>{props.temp.wind}</span>mph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.temp.temperature * 9) / 5 + 32);
    let realFeel = Math.round((props.temp.realfeel * 9) / 5 + 32);
    let hightemp = Math.round((props.temp.high_temp * 9) / 5 + 32);
    let lowtemp = Math.round((props.temp.low_temp * 9) / 5 + 32);

    return (
      <div>
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
        <div className='row'>
          <div className='col-sm-6'>
            <div className='card information'>
              <div className='card-body'>
                <p className='card-text' id='currenttime'>
                  <FormattedDate defaultdate={props.temp.date} />
                </p>

                <p className='card-text'>
                  Highest for the day: <span id='high-temp'>{hightemp}°F</span>
                </p>
                <p className='card-text'>
                  Lowest for the day: <span id='low-temp'>{lowtemp}°F</span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card ex information'>
              <div className='card-body'>
                <p className='card-text'>
                  Real Feel: <span id='real-feel'>{realFeel}°F</span>
                </p>
                <p className='card-text'>
                  Humidity: <span id='humid'>{props.temp.humidity}</span>%
                </p>
                <p className='card-text'>
                  Wind: NE <span id='wind'>{props.temp.wind}</span>mph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
