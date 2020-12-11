import React from "react";
import "./weatherInformation.css";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  console.log(props);
  return (
    <div className='city'>
      <div>
        <h1 className='cityorzip'>{props.data.city}</h1>
      </div>
      <h2 id='mainTemperature'>
        <WeatherTemperature temp={props.data} />
      </h2>
    </div>
  );
}
