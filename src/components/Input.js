import React, {
  Component,
  useState,
  useEffect
} from "react";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/Input";

const getOpenWeather = () => {
  fetch(
      "./api/api.openweathermap.org/data/2.5/weather?zip={zip code},us&appid=" +
      process.env.REACT_APP_OW_API_KEY +
      ".json&units=imperial"
    )
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};

export default function Input() {
  return ( <
    React.Fragment >
    <
    Input > < /Input>  <
    Button > Submit < /Button>  <
    /React.Fragment>
  );
}