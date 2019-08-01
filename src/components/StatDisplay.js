import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Paragraf from "./stylecomponents/Paragraf";
import Section from "./stylecomponents/Section";
import { Chart } from "react-google-charts";
import Loader from "./stylecomponents/Loader";

const startData = [
  [
    "Element",
    "Procent",
    { role: "style" },
    {
      sourceColumn: 4,
      role: "annotation",
      type: "string",
      calc: "stringify"
    }
  ]
];

function StatDisplay(props) {
  const [poll, setPoll] = useState();
  const [data, setData] = useState([]);

  const display = () => {
    const mainData = [];
    poll.forEach((item, i) => {
      const newData = [...startData];
      const arrData = Object.entries(item).splice(6);

      arrData.forEach(item => {
        if ("__v" !== item[0]) {
          item[1] = Number(item[1]);
          item.push("silver");
          item.push(null);
          newData.push(item);
        }
      });
      newData.sort(function(a, b) {
        return b[1] - a[1];
      });
      mainData.push(newData);
    });
    setData(mainData);
  };

  const { teryt } = props.match.params;
  useEffect(() => {
    fetch(`http://localhost:5000/${teryt}`)
      .then(response => {
        if (response.ok) return response;
      })
      .then(response => response.json())
      .then(myJson => setPoll(myJson))
      .catch(error => alert(error));
  }, [teryt]);

  // useEffect(() => {
  //   display();
  // }, [poll]);
  const nameDistrict = () => {
    if (poll) {
      switch (poll[0].Teryt.length) {
        case 2:
          return `Województwo ${poll[0].JST}`;
        case 4:
          return `Powiat ${poll[0].JST}`;
        case 6:
          return `${poll[0].JST}`;
        default:
          return;
      }
    }
  };
  return (
    <>
      <Nav />
      <button onClick={() => display()}>pokaz dane</button>
      <Paragraf>{nameDistrict()}</Paragraf>
      {data.length > 0 ? (
        poll.map((item, i) => (
          <Section key={i} paddingtop={"10px"}>
            <Chart
              width={"100%"}
              height={"300px"}
              chartType="BarChart"
              data={data[i]}
              options={{
                title: `${item.Poll}`,
                backgroundColor: "#f2f2f2",
                // orientation: "horizontal",
                width: "90%",
                chartArea: {
                  left: "25%",
                  width: "50%"
                },
                bar: { groupWidth: "95%" },
                legend: { position: "none" }
              }}
            />
          </Section>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
}

export default StatDisplay;
