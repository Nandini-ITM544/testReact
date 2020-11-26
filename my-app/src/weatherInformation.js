import React from "react";
import "./weatherInformation.css";

export default function WeatherInformation() {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='card information'>
          <div className='card-body'>
            <p className='card-text' id='currenttime'></p>

            <p className='card-text'>
              Highest for the day: <span id='high-temp'></span>
            </p>
            <p className='card-text'>
              Lowest for the day: <span id='low-temp'></span>
            </p>
          </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='card ex information'>
          <div className='card-body'>
            <p className='card-text'>
              Real Feel: <span id='real-feel'></span>
            </p>
            <p className='card-text'>
              Humidity: <span id='humid'></span>%
            </p>
            <p className='card-text'>
              Wind: NE <span id='wind'></span>mph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
