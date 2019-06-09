import React, { useState } from "react";
import StatDisplay from "./StatDisplay";
import StatChoice from "./StatChoice";
function Stat() {
  const [statDisplayed, setStatDisplayed] = useState(false);

  return (
    <>
      {statDisplayed ? (
        <StatDisplay />
      ) : (
        <StatChoice setStatDisplayed={() => setStatDisplayed(true)} />
      )}
    </>
  );
}

export default Stat;
