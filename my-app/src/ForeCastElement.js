import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

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
      <p>{hours()}</p>
      <div className='card-body'>
        <h5 className='card-title'>
          <WeatherIcon code={props.data.weather[0].icon} />
        </h5>
        <p className='card-text' id='forecast'>
          {temperature()}
        </p>
      </div>
    </div>
  );
}
