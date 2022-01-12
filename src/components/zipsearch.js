import React, { useEffect, useState } from "react";
import axios from "axios";
// import ReactDOM, { render } from 'react-dom';

function ZipCodes(props) {
  const { zip, setZip, list, setList } = props; //passing down as child

  const handleSubmit = (event) => {
    //once user hits submit button
    event.preventDefault();
    axios
      .get("http://ctp-zip-api.herokuapp.com/zip/" + zip)
      .then((response) => {
        setList(response.data);
      });
    // console.log(event.target.input);
  };
  const handleChange = (event) => {
    event.preventDefault(); //prevents refresh
    setZip(event.target.value); //input will get the value and setting setZip value
  };
  return (
    <>
      <div className="container text-center justify-content-center p-2">
        <form onSubmit={handleSubmit}>
          <label for="zipsearch">Zip Code:</label>
          <input onChange={handleChange} name="zipcode" type="text"></input>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>

        {list.map((element) => {
          return (
            <div class="d-flex justify-content-center ">
              <ul className="list-group list-group border m-3">
                <div className="text-start">
                  <h5
                    className="text-dark  bg-secondary text-center"
                    style={{ height: "3rem" }}
                  >
                    {element.City}, {element.State}
                  </h5>
                  <li className="list-group">• State: {element.State}</li>
                  <li className="list-group">
                    • Location: ({element.Lat}, {element.Long})
                  </li>
                  <li className="list-group">
                    • Population (estimated): {element.EstimatedPopulation}
                  </li>
                  <li className="list-group marker">
                    • Wages: {element.TotalWages}
                  </li>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ZipCodes;
