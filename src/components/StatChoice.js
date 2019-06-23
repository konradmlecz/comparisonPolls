import React, { useState, useEffect } from "react";
import Button from "./stylecomponents/Button";
import Dropdownlist from "./stylecomponents/Dropdownlist";
import axios from "axios";
import Container from "./stylecomponents/Container";
import Paragraf from "./stylecomponents/Paragraf";

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

  const displeydCounties = countys.filter(
    op => props.selectedVoivodeships === op.teryt.slice(0, 2) || !op.teryt
  );
  const displeydDistrict = districts.filter(
    op =>
      (props.selectedCountys === op.teryt.slice(0, 4) &&
        props.selectedVoivodeships === op.teryt.slice(0, 2)) ||
      !op.teryt
  );

  return (
    <>
      <Container paddingtop={"20px"}>
        <Paragraf>
          {" "}
          Aplikacja umożliwia porównanie wyników wyborów na poziomie:
          województw, powiatów i gmin. Na tą chwilę dostępne są wybory z lat:
        </Paragraf>
        <Paragraf>
          2015r. - parlamentarne, 2018r. - samorządowe, 2019r. - europejskie
        </Paragraf>
      </Container>
      <Container paddingtop={"10px"}>
        <Dropdownlist
          defaultValue="woj"
          onChange={e => props.setEntity(e.target.value, 0)}
        >
          {voivodeships.map((op, i) => {
            if (i === 0) {
              return (
                <option key="woj" value="woj" hidden>
                  województwo
                </option>
              );
            } else
              return (
                <option key={op.teryt} value={op.teryt}>
                  {" "}
                  {op.voivodeship}
                </option>
              );
          })}
        </Dropdownlist>{" "}
        <Dropdownlist
          defaultValue="pow"
          onChange={e => props.setEntity(e.target.value, 1)}
        >
          {!Number(props.selectedVoivodeships) ||
            displeydCounties.map((op, i) => {
              if (i === 0) {
                return (
                  <option key="pow" value="pow" hidden>
                    powiat
                  </option>
                );
              } else
                return (
                  <option key={op.teryt} value={op.teryt}>
                    {" "}
                    {op.county}
                  </option>
                );
            })}
        </Dropdownlist>{" "}
        <Dropdownlist
          defaultValue="gm"
          onChange={e => props.setEntity(e.target.value, 2)}
        >
          {!Number(props.selectedCountys) ||
            displeydDistrict.map((op, i) => {
              if (i === 0) {
                return (
                  <option key="gm" value="gm" hidden>
                    gmina
                  </option>
                );
              } else
                return (
                  <option key={op.teryt} value={op.teryt}>
                    {" "}
                    {op.district}
                  </option>
                );
            })}
        </Dropdownlist>{" "}
        <Button onClick={props.setStatDisplayed}>Szukaj</Button>
      </Container>
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
