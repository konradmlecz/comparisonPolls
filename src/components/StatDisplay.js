import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Chart } from "react-google-charts";

function StatDisplay(props) {
  const [chart, setChart] = useState([]);
  const { woj, pow, gm } = props.match.params;
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch(`http://localhost:5000/${woj}/${pow}/${gm}`)
      .then(response => {
        console.log(response);
        if (response.ok) return response;
      })
      .then(response => response.json())
      .then(myJson => setData(myJson))
      .catch(error => alert(error));
  };

  useEffect(() => {
    fetchData();
    console.log(woj);
  }, []);

  return (
    <>
      <Nav />
      {<p>{"to ja"}</p>}
      {console.log(data)}
      {/* <Chart chartType="ColumnChart" width="80%" height="200px" data={data} /> */}
      {/* <p>{props.dataToDisplay ? props.dataToDisplay.name : null}</p> */}
    </>
  );
}

export default StatDisplay;
