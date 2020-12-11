import React from "react";
import "./weatherInformation.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherText from "./weathertext";

export default function WeatherInformation(props) {
  console.log(props);
  return (
    <div className='city'>
      <h1 className='cityorzip'>{props.data.city}</h1>
      <h2 id='mainTemperature'>
        <WeatherIcon code={props.data.icon} alt={props.data.description} />

        <WeatherTemperature temp={props.data} />
      </h2>
    </div>
  );
}
