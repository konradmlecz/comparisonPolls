import React from "react";
import "./App.css";
import StatChoice from "./components/StatChoice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StatStart from "./components/StatStart";
import StatInfo from "./components/StatInfo";
import StatDisplay from "./components/StatDisplay";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StatStart} />
          <Route path="/choice" exact component={StatChoice} />
          <Route path="/display/:teryt" component={StatDisplay} />
          <Route path="/contact" exact component={StatInfo} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
