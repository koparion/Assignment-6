import React, {useEffect, useState} from "react"
import axios from "axios"
// import ReactDOM, { render } from 'react-dom';

function ZipCodes(props)
    {
        const [item, setItem] = useState([]);
        // const [seletedZip, setSelectedZip] = useState([]);
        useEffect(() => {
           axios.get("http://ctp-zip-api.herokuapp.com/zip/"+props).then((response) => {
              const data = setItem(response.data);
                console.log(data);  
            });
        },[]);
    
        // if(!setItems)
        // {
        //     return <h3>not found</h3>
        // }
        


    return (
        <>
        <div >
             <label for="zipsearch">Enter Zip Code</label>
                <input id="zip" type="number"></input>
                <button type="submit" value="Submit">Submit</button>
         
        {item.map((element) => {
                    return (
                       <ul className="d-inline-flex list-group list-group">
                                <li onChange="zip" className="list-group-item">Zip: {element.State}</li>
                                <li className="list-group-item">City: {element.City}</li>
                                <li className="list-group-item">Location: {element.Lat}, {element.Long}</li>
                                <li className="list-group-item">Wages: {element.TotalWages}</li>
                            </ul>
                    );
                })}
            </div>
       </>

    );
}

export default ZipCodes;