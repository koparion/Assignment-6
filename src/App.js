// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import ZipCodes from "./components/zipsearch";
import ReactDOM from "react-dom";

function App() {
  const [zip, setZip] = useState(""); // empty state to use user input from handle change function
  const [list, setList] = useState([]); // list that gets back from api (empty array)

  return (
    <div>
      <div className="container bg-dark text-center text-white justify-content-center p-4 ">
        <h1>Zip Codes Search</h1>
      </div>
      <div className="container text-center">
        <ZipCodes zip={zip} list={list} setList={setList} setZip={setZip} />
        {/* value and pair object key=value */}
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
