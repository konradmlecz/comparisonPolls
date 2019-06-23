import React, { useState } from "react";
import StatDisplay from "./StatDisplay";
import StatChoice from "./StatChoice";
import Nav from "./Nav";

function Stat() {
  const [statDisplayed, setStatDisplayed] = useState(false);

  const [selectedDistricts, setsSelectedDistricts] = useState(null);
  const [selectedCountys, setsSelectedCountys] = useState(null);
  const [selectedVoivodeships, setsSelectedVoivodeships] = useState(null);

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
      <Nav />
      {statDisplayed ? (
        <StatDisplay
          selectedDistricts={selectedDistricts}
          selectedCountys={selectedCountys}
          selectedVoivodeships={selectedVoivodeships}
        />
      ) : (
        <StatChoice
          setEntity={setEntity}
          selectedDistricts={selectedDistricts}
          selectedCountys={selectedCountys}
          selectedVoivodeships={selectedVoivodeships}
          setStatDisplayed={() => setStatDisplayed(true)}
        />
      )}
    </>
  );
}

export default Stat;
