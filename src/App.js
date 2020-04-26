import React, { useState } from "react";
import 'bootswatch/dist/united/bootstrap.min.css';
import 'moment-timezone'
import "./App.css";
import Moment from "react-moment";


export default function App() {

  const API_KEY = '678ba9df227448b5ef0a9f4ff586b675';

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [timezone, setTimezone] = useState("");
  const [icon, setIcon] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");


  const getWeather = () => {

    if (input === "") {
      setError("enter Zip Code");
      return;
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + input + '&appid=' + API_KEY + '&units=imperial')

      .then((response) => response.json())
      .then((weather) => {
        console.log(weather);
        setCity(weather.name);
        setTemp(Math.floor(weather.main.temp));
        setDesc(weather.weather[0].description);
        setIcon(weather.weather[0].icon);


        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + weather.coord.lat + '&lon=' + weather.coord.lon + '&appid=' + API_KEY)


          .then((response) => response.json())
          .then((local) => {
            console.log(local);
            setTimezone(local.timezone);
          });
      });
  };



  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarColor02">
        <p class="navbar-brand">Weather In Your City</p>
      </nav>
      <h1>Weather In Your City</h1>
      <input type="text" placeholder="Enter Zip Code" onChange={(e) => setInput(e.target.value)} />
      <button onClick={getWeather} className="badge badge-dark"> Submit </button>
      {city ? (
        <div>
          <p>{city}</p>
          <Moment format="dddd MMMM Do YYYY, h:mm a z" tz={timezone}></Moment>
          <p>{temp} &deg;F</p>
          <p>{desc}</p>
          <img src={"https://openweathermap.org/img/wn/" + icon + "@2x.png"} alt={desc} />
        </div>
      ) : null}
      <p>{error}</p>
    </div>
  )
}