import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./forecast.css";

export default function ForeCastElement(props) {
  console.log(props.units);
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`;
  }

  function temperature() {
    if (props.units === "metric") {
      let temperature = Math.round(props.data.main.temp);
      return `${temperature}°C`;
    } else {
      let temperature = Math.round((props.data.main.temp * 9) / 5 + 32);
      return `${temperature}°F`;
    }
  }
  return (
    <div className='card'>
      <div className='card-body'>
        <p>{hours()}</p>
        <WeatherIcon code={props.data.weather[0].icon} />

        <p className='card-text' id='forecast'>
          {temperature()}
        </p>
      </div>
    </div>
  );
}
