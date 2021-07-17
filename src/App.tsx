import React, { useState } from "react";
import "./App.css";
import { Options } from "./Options";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>searchable options demo</h1>
      </header>
      <div className="main">
        <div className="input">
          <input
            id="search_input"
            type="text"
            onChange={(e) =>
              setSearchValue(e.target.value.trim().toLowerCase())
            }
          ></input>
        </div>
        <Options searchValue={searchValue}></Options>
      </div>
    </div>
  );
}

export default App;
