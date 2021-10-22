import React from "react";
import "./styles.css";
import Search from "./Search";
import Hourly from "./Hourly";
import Details from "./Details";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Search />
      <h2>
        <span id="temperature">19</span>
        <span>
          <a href="/" id="celsiusUnit" className="active">
            °C |
          </a>
        </span>
        <span>
          {" "}
          <a href="/" id="fahrenheitUnit">
            °F
          </a>
        </span>
      </h2>
      <h4>Last updated on: Friday 14:00</h4>
      <Hourly />
      <Details />
      <Forecast />
      <p>
        <a
          href="https://github.com/acstermann/Weather_App_with_React"
          className="ending"
        >
          Open-source code{" "}
        </a>
        by Ann-Christin Stermann
      </p>
    </div>
  );
}
