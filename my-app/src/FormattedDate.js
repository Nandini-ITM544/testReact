import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.defaultdate.getDay();
  let hour = props.defaultdate.getHours();
  let minutes = props.defaultdate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <div>
      {days[day]} {hour}:{minutes}
    </div>
  );
}
