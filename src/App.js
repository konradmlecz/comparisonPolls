import React, { useEffect } from "react";
import "./App.css";
import StatChoice from "./components/StatChoice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StatStart from "./components/StatStart";
import StatInfo from "./components/StatInfo";
import StatDisplay from "./components/StatDisplay";
import ErrorPage from "./components/ErrorPage";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("./entity.json")
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "GET-ENTITY",
          payload: {
            voivodeship: response.voivodeships,
            county: response.countys,
            district: response.districts
          }
        });
      })
      .catch(error => console.error("Error:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StatStart} />
          <Route path="/choice" exact component={StatChoice} />
          <Route path="/display/:teryt" component={StatDisplay} />
          <Route path="/info" exact component={StatInfo} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
