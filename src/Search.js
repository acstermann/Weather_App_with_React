import React, { useState } from "react";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [sentence, setSentence]=useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setSentence(`It is currently 25°C in ${city}`)
  }
  function showCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Change city"
          id="search-text-input"
          onChange={showCity}
        />
        <input type="submit" value="Search" />
      </form>
      <button>Current location</button>
      <h1 className="city" id="city">{sentence}</h1>
    </div>
    
  );
}
