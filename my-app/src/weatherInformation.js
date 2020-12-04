import React from "react";
import "./weatherInformation.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div>
      <div className='city'>
        <h1 className='cityorzip'>{props.data.city}</h1>
        <h2 id='mainTemperature'>
          <WeatherIcon code={props.data.icon} alt={props.data.description} />

          <WeatherTemperature temp={props.data.temperature} />
        </h2>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card information'>
            <div className='card-body'>
              <p className='card-text' id='currenttime'>
                <FormattedDate defaultdate={props.data.date} />
              </p>

              <p className='card-text'>
                Highest for the day:{" "}
                <span id='high-temp'>{props.data.high_temp}°C</span>
              </p>
              <p className='card-text'>
                Lowest for the day:{" "}
                <span id='low-temp'>{props.data.low_temp}°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card ex information'>
            <div className='card-body'>
              <p className='card-text'>
                Real Feel: <span id='real-feel'>{props.data.realfeel}°C</span>
              </p>
              <p className='card-text'>
                Humidity: <span id='humid'>{props.data.humidity}</span>%
              </p>
              <p className='card-text'>
                Wind: NE <span id='wind'>{props.data.wind}</span>mph
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
