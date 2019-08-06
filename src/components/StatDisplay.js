import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Nav from "./Nav";
import Paragraf from "./stylecomponents/Paragraf";
import Section from "./stylecomponents/Section";
import Loader from "./stylecomponents/Loader";
import ErrorFetch from "./stylecomponents/ErrorFetch";
import ContainerError from "./stylecomponents/ContainerError";
import ContainerChart from "./stylecomponents/ContainerChart";
import Footer from "./stylecomponents/Footer";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const draftChart = [
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

const colors = [
  "blue",
  "DarkRed",
  "ForestGreen",
  "red",
  "Gold",
  "gray",
  "white",
  "orange",
  "yellow",
  "silver"
];

function StatDisplay(props) {
  const [pollsData, setPollsData] = useState();
  const [chartsToDisplay, setChartsToDisplay] = useState([]);
  const [error, setError] = useState(false);
  const [errorContent, setErrorContent] = useState(null);

  const display = myJson => {
    const charts = [];
    myJson.forEach((item, i) => {
      const chart = [...draftChart];
      const arrData = Object.entries(item).splice(6);
      arrData.forEach((item, i) => {
        if ("__v" !== item[0]) {
          item[1] = Number(item[1]);
          item.push(null);
          item.push(null);
          chart.push(item);
        }
      });
      chart.sort(function(a, b) {
        return b[1] - a[1];
      });
      chart.forEach((item, i) => {
        if (i) {
          item[2] = colors[i - 1];
        }
      });
      charts.push(chart);
    });
    setChartsToDisplay(charts);
  };

  const teryt = props.match.params.teryt;

  useEffect(() => {
    fetch(`http://localhost:5000/${teryt}`)
      .then(response => {
        if (response.ok) return response;
      })
      .then(response => response.json())
      .then(myJson => {
        if (myJson.length < 1) {
          setError(true);
          setErrorContent(
            "Zły Teryt. Nie ma takiej jednoski samorządowej. Wybierz z listy poprawną."
          );
        } else {
          setPollsData(myJson);
          display(myJson);
        }
      })
      .catch(error => {
        setError(true);
        setErrorContent("Dane chwilo niedostępne. Spróbuj ponownie później");
      });
  }, [teryt]);

  const nameDistrict = () => {
    if (pollsData) {
      if (pollsData[0]) {
        switch (pollsData[0].Teryt.length) {
          case 2:
            return `Województwo ${pollsData[0].JST}`;
          case 4:
            return `Powiat ${pollsData[0].JST}`;
          case 6:
            return `${pollsData[0].JST}`;
          default:
            return;
        }
      }
    }
  };
  return (
    <>
      <Nav />
      <Paragraf mb="10px">{nameDistrict()}</Paragraf>
      {chartsToDisplay.length > 0 ? (
        pollsData.map((item, i) => (
          <ContainerChart key={i}>
            <Chart
              width={"100%"}
              height={"300px"}
              chartType="BarChart"
              data={chartsToDisplay[i]}
              options={{
                title: `${item.Poll}`,
                backgroundColor: "#f2f2f2",
                // orientation: "horizontal",
                width: "80%",
                chartArea: {
                  left: "25%",
                  width: "50%"
                },
                bar: { groupWidth: "95%" },
                legend: { position: "none" }
              }}
            />
          </ContainerChart>
        ))
      ) : error ? (
        <ContainerError mh={"90vh"}>
          <FontAwesomeIcon icon={faExclamation} className="exclamation" />
          <ErrorFetch>{errorContent}</ErrorFetch>
        </ContainerError>
      ) : (
        <Section mh="90vh">
          <Loader />
        </Section>
      )}
      <Footer bgc={"var(--color-complementary)"}>
        <Paragraf>K.M. Kraków 2019 - All rights reserved</Paragraf>
      </Footer>
    </>
  );
}

export default StatDisplay;
