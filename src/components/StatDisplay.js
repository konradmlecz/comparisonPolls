import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

function StatDisplay(props) {
  const [chart, setChart] = useState([]);

  const changeData = obj => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const values2 = [];
    values.forEach(value => {
      let value2 = value.replace(",", ".");
      values2.push(Number(value2));
    });

    const newObj = {};
    newObj.keys = keys;
    newObj.values = values2;
    console.log(newObj);
    return obj;
  };

  const data = [
    ["Element", "Density", { role: "style" }],
    [Object.getOwnPropertyNames(chart)[4], Number(chart.PIS), "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
  ];

  useEffect(() => {
    axios
      .get("fakedata.json")
      .then(response => setChart(changeData(response.data[0])));
  }, []);

  return (
    <>
      {console.log(chart)}
      <Chart chartType="ColumnChart" width="80%" height="200px" data={data} />
    </>
  );
}

export default StatDisplay;
