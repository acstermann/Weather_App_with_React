import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input type="text" placeholder="Change city" id="search-text-input" />
        <input type="submit" value="Search" />
      </form>
      <button>Current location</button>
    </div>
  );
}
