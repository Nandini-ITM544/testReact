import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [loaded, setloaded] = useState(false);
  const [forcast, setForecast] = useState(null);
  function displayForecast(response) {
    console.log(response.data);
    console.log(response.data.list[0].main.temp);
    setForecast(response.data);
    setloaded(true);
  }

  if (loaded && props.city === forcast.city.name) {
    return (
      <div className='forecast-element'>
        <div className='card-group'>
          <div className='card'>
            <p>{new Date(forcast.list[0].dt * 1000).getHours()}:00</p>
            <div className='card-body'>
              <h5 className='card-title'>
                <WeatherIcon code={forcast.list[0].weather[0].icon} />
              </h5>
              <p className='card-text' id='forecast'>
                {Math.round(forcast.list[0].main.temp)}°C
              </p>
            </div>
          </div>
        </div>
        <div className='card-group'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <WeatherIcon code={forcast.list[1].weather[0].icon} />
              </h5>
              <p className='card-text' id='forecast'>
                {Math.round(forcast.list[1].main.temp)}°C
              </p>
            </div>
          </div>
        </div>
        <div className='card-group'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <WeatherIcon code={forcast.list[2].weather[0].icon} />
              </h5>
              <p className='card-text' id='forecast'>
                {Math.round(forcast.list[2].main.temp)}°C
              </p>
            </div>
          </div>
        </div>
        <div className='card-group'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <WeatherIcon code={forcast.list[3].weather[0].icon} />
              </h5>
              <p className='card-text' id='forecast'>
                {Math.round(forcast.list[3].main.temp)}°C
              </p>
            </div>
          </div>
        </div>
        <div className='card-group'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <WeatherIcon code={forcast.list[4].weather[0].icon} />
              </h5>
              <p className='card-text' id='forecast'>
                {Math.round(forcast.list[4].main.temp)}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fb1865d0d87f6d1b02d912ac727945ca";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(displayForecast);
    return null;
  }
}
