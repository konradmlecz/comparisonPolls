import React, { useState, useEffect } from "react";
import Button from "./Button";
import Dropdownlist from "./Dropdownlist";
import axios from "axios";

function StatChoice(props) {
  const [districts, setDistricts] = useState([]);
  const [countys, setCountys] = useState([]);
  const [voivodeships, setVoivodeships] = useState([]);

  useEffect(() => {
    axios.get("district.json").then(response => setDistricts(response.data));
    axios.get("county.json").then(response => setCountys(response.data));
    axios
      .get("voivodeship.json")
      .then(response => setVoivodeships(response.data));
  }, []);

  return (
    <>
      <div>StatChoice</div>
      <Dropdownlist onChange={e => props.setEntity(e.target.value, 0)}>
        {voivodeships.map(op => {
          return (
            <option key={op.teryt} value={op.teryt}>
              {" "}
              {op.voivodeship}
            </option>
          );
        })}
      </Dropdownlist>{" "}
      <Dropdownlist onChange={e => props.setEntity(e.target.value, 1)}>
        {!Number(props.selectedVoivodeships) ||
          countys.map(op => {
            if (
              props.selectedVoivodeships === op.teryt.slice(0, 2) ||
              !op.teryt
            ) {
              console.log("object");
              return (
                <option key={op.teryt} value={op.teryt}>
                  {" "}
                  {op.county}
                </option>
              );
            }
          })}
      </Dropdownlist>{" "}
      <Dropdownlist onChange={e => props.setEntity(e.target.value, 2)}>
        {!Number(props.selectedCountys) ||
          districts.map(op => {
            if (
              (props.selectedCountys === op.teryt.slice(0, 4) &&
                props.selectedVoivodeships === op.teryt.slice(0, 2)) ||
              !op.teryt
            ) {
              console.log("object");
              return (
                <option key={op.teryt} value={op.teryt}>
                  {" "}
                  {op.district}
                </option>
              );
            }
          })}
      </Dropdownlist>{" "}
      <Button onClick={props.setStatDisplayed}>Szukaj</Button>
    </>
  );
}

export default StatChoice;

// fetch("/api/district.json")
//   .then(response => {
//     console.log(response);
//     if (response.ok) return response;
//   })
// .then(response => console.log(response.json()))
// .then(myJson => console.log(myJson))
// .catch(error => alert(error + " =>id"));

// <option value="volvo">Volvo</option>
