import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import CitySearch from "./components/citysearch";
import ReactDOM from "react-dom";

function App() {
  const [city, setCity] = useState([]);
  const [list, setList] = useState([]);

  return (
    <>
      <div className="container bg-dark text-center text-white justify-content-center p-4 ">
        <h1>City Search</h1>
      </div>
      <div className="container text-center">
        <CitySearch
          city={city}
          setCity={setCity}
          list={list}
          setList={setList}
        />
      </div>
    </>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
