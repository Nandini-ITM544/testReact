import React from "react";
import "./weatherInformation.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  console.log(props);
  return (
    <div className='city'>
      <h1 className='cityorzip'>{props.data.city}</h1>

      <h2 id='mainTemperature'>
        <WeatherTemperature temp={props.data} />
      </h2>
    </div>
  );
}
