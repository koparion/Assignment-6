import React from "react";
import axios from "axios";

function CitySearch(props) {
  const { city, setCity, list, setList } = props;

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get("http://ctp-zip-api.herokuapp.com/city/" + city)
      .then((response) => {
        setList(response.data);
      });
  };
  const handleChange = (event) => {
    event.preventDefault();
    const input = event.target.value;
    setCity(input.toUpperCase());
  };

  return (
    <>
      <div>
        <div className="container text-center justify-content-center p-2">
          <form onSubmit={handleSearch}>
            <input onChange={handleChange} name="city" type="text"></input>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>

          {list.map((element) => {
            return (
              <div className="container">
                <div className="d-flex justify-content-center">
                  <ul className="list-group list-group border m-1">
                    <li className="list-group">{element}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default CitySearch;
