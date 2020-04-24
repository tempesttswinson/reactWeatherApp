import React from "react";
import UserInput from "./components/UserInput";
import Weather from "./components/weather";
import time from "./components/time";
import "./App.css";

const API_KEY = '678ba9df227448b5ef0a9f4ff586b675';

export default function App() {
  const getWeather = async () => {
    const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=28273&appid=' + API_KEY + '&units=imperial');

    console.log(api_call);
    const weather = await api_call.json();

    console.log(weather);
  }

  return (
    <div >
      <UserInput getWeather={getWeather} />
    </div>
  );
}