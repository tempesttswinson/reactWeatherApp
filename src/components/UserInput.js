import React, {
  Component,
  useState,
  useEffect
} from "react";
import Button from 'react-bootstrap/Button';


export default function UserInput(props) {
  return (
    <>
      <input placeholder="Enter Zip Code" />
      <button onClick={props.getWeather} > Submit </button>
    </>
  )
}