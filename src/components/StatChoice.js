import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import img from "./../images/poland.jpg";
import Button from "./stylecomponents/Button";
import Dropdownlist from "./stylecomponents/Dropdownlist";
import Paragraf from "./stylecomponents/Paragraf";
import Image from "./stylecomponents/Image";
import Section from "./stylecomponents/Section";
import ContainerDevideToHalf from "./stylecomponents/ContainerDevideToHalf";
import ContainerRestrictive from "./stylecomponents/ContainerRestrictive";
import Footer from "./stylecomponents/Footer";

function StatChoice(props) {
  const units = useSelector(state => state.units);
  const dispatch = useDispatch();
  const [buttonDisable, setButtonDisable] = useState(true);
  const [districts, setDistricts] = useState([]);
  const [countys, setCountys] = useState([]);
  const [voivodeships, setVoivodeships] = useState([]);
  const [selectedTeryt, setSelectedTeryt] = useState("teryt");

  const setEntity = (e, enitity) => {
    const index = e.target.selectedIndex;
    const teryt = e.target.value;
    const text = e.nativeEvent.target[index].text;
    if (teryt !== "woj") setButtonDisable(false);
    else setButtonDisable(true);
    setSelectedTeryt(teryt);
    switch (enitity) {
      case 0:
        dispatch({
          type: "SET-UNITS",
          payload: {
            selectedDistricts: { teryt: "gm", text: "gm" },
            selectedCountys: { teryt: "pow", text: "pow" },
            selectedVoivodeships: { teryt: teryt, text: text }
          }
        });
        break;
      case 1:
        dispatch({
          type: "SET-UNITS",
          payload: {
            selectedDistricts: { teryt: "gm", text: "gm" },
            selectedCountys: { teryt: teryt, text: text },
            selectedVoivodeships: units.selectedVoivodeships
          }
        });
        break;
      case 2:
        dispatch({
          type: "SET-UNITS",
          payload: {
            selectedDistricts: { teryt: teryt, text: text },
            selectedCountys: units.selectedCountys,
            selectedVoivodeships: units.selectedVoivodeships
          }
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios.get("district.json").then(response => setDistricts(response.data));
    axios.get("county.json").then(response => setCountys(response.data));
    axios
      .get("voivodeship.json")
      .then(response => setVoivodeships(response.data));
  }, []);

  const displeydCounties = countys.filter(op => {
    return (
      units.selectedVoivodeships.teryt === op.teryt.slice(0, 2) || !op.teryt
    );
  });
  const displeydDistrict = districts.filter(
    op =>
      (units.selectedCountys.teryt === op.teryt.slice(0, 4) &&
        units.selectedVoivodeships.teryt === op.teryt.slice(0, 2)) ||
      !op.teryt
  );
  return (
    <>
      <Nav />
      <Section bgc={"var(--color-light)"}>
        <Dropdownlist defaultValue="woj" onChange={e => setEntity(e, 0)}>
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
        <Dropdownlist defaultValue="pow" onChange={e => setEntity(e, 1)}>
          {!Number(units.selectedVoivodeships.teryt) ||
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
        <Dropdownlist defaultValue="gm" onChange={e => setEntity(e, 2)}>
          {!Number(units.selectedCountys.teryt) ||
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
        <Link to={`/display/${selectedTeryt}`}>
          {" "}
          <Button disabled={buttonDisable}>Szukaj</Button>
        </Link>
      </Section>
      <Section bgc={"var(--color-white)"}>
        <ContainerRestrictive>
          <ContainerDevideToHalf>
            <Image src={img} width={"80%"} />
          </ContainerDevideToHalf>
          <ContainerDevideToHalf bgc={"var(--color-light)"}>
            <Paragraf align="justify">
              Sprawdz wyniki w swoim województwie, powiecie lub gminie! Wybierz
              z powyższego menu odpowiednią opcję (nazwę jednostki samorządu
              terytorialnego), a następnie naciśnij przycisk "szukaj".
            </Paragraf>
          </ContainerDevideToHalf>
        </ContainerRestrictive>
      </Section>
      <Footer bgc={"var(--color-complementary)"}>
        <Paragraf>K.M. Kraków 2019 - All rights reserved</Paragraf>
      </Footer>
    </>
  );
}

export default StatChoice;
