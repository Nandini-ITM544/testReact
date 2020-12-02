import logo from "./logo.svg";

import "./App.css";
import Search from "./search";

import WeatherInformation from "./weatherInformation";
import Forecast from "./forecast";
import Footer from "./footer";

function WeatherApp() {
  return (
    <div className='container'>
      <h1>Welcome to Nandini's weather channel 👋🏻</h1>
      <Search />

      <WeatherInformation />
      <div className='forecast-element'>
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default WeatherApp;
