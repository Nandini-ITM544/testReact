import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className='card-group'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            <img id='icon' src='' alt='Loading...' />
          </h5>
          <p className='card-text' id='forecast'></p>
        </div>
      </div>
    </div>
  );
}
