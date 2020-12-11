import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";

import ForeCastElment from "./ForeCastElement";

export default function Forecast(props) {
  const [loaded, setloaded] = useState(false);
  const [forcast, setForecast] = useState(null);

  function displayForecast(response) {
    //console.log(response.data);
    //console.log(response.data.list[0].main.temp);
    setForecast(response.data);
    setloaded(true);
  }

  if (loaded && props.city === forcast.city.name) {
    return (
      <div className='forecast-element'>
        <div className='card-group'>
          {forcast.list.slice(0, 6).map(function (forcastitem) {
            return <ForeCastElment data={forcastitem} units={props.units} />;
          })}
          ;
        </div>
      </div>
    );
  } else {
    let apiKey = "524548cb6cd5477e5eb95ca4824b75f3";
    let units = "metric";
    console.log(units);
    // if(props.unit ="metric")
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(displayForecast);
    return null;
  }
}
