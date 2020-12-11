import React, { useState } from "react";

export default function WeatherText(props) {
  const [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <div>
        <span id='high-temp'>{props.data.high_temp}°C</span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.temp * 9) / 5 + 32);
    return (
      <div>
        <span id='high-temp'>{props.data.high_temp}°F</span>
      </div>
    );
  }
}
