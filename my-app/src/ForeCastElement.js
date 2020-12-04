import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./forecast.css";

export default function ForeCastElement(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
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
