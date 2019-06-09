import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";
import Dropdownlist from "./Dropdownlist";

function StatChoice(props) {
  const [districts, setDistricts] = useState([]);
  const [countys, setCountys] = useState([]);
  const [voivodeships, setVoivodeships] = useState([]);
  const [selectedDistricts, setsSelectedDistricts] = useState(null);
  const [selectedCountys, setsSelectedCountys] = useState(null);
  const [selectedVoivodeships, setsSelectedVoivodeships] = useState(null);

  useEffect(() => {
    axios.get("district.json").then(response => setDistricts(response.data));
    axios.get("county.json").then(response => setCountys(response.data));
    axios
      .get("voivodeship.json")
      .then(response => setVoivodeships(response.data));
  }, []);

  const setEntity = (value, enitity) => {
    switch (enitity) {
      case 0:
        setsSelectedVoivodeships(value);
        setsSelectedCountys(null);
        setsSelectedDistricts(null);
        break;
      case 1:
        setsSelectedCountys(value);
        setsSelectedDistricts(null);
        break;
      case 2:
        setsSelectedDistricts(value);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div>StatChoice</div>
      <Dropdownlist onChange={e => setEntity(e.target.value, 0)}>
        {voivodeships.map(op => {
          return (
            <option key={op.teryt} value={op.teryt}>
              {" "}
              {op.voivodeship}
            </option>
          );
        })}
      </Dropdownlist>{" "}
      <Dropdownlist onChange={e => setEntity(e.target.value, 1)}>
        {!Number(selectedVoivodeships) ||
          countys.map(op => {
            if (selectedVoivodeships === op.teryt.slice(0, 2) || !op.teryt) {
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
      <Dropdownlist onChange={e => setEntity(e.target.value, 2)}>
        {!Number(selectedCountys) ||
          districts.map(op => {
            if (
              (selectedCountys === op.teryt.slice(0, 4) &&
                selectedVoivodeships === op.teryt.slice(0, 2)) ||
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
