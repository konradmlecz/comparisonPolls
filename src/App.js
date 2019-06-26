import React from "react";
import "./App.css";
import StatChoice from "./components/StatChoice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StatMain from "./components/StatMain";
import StatContact from "./components/StatContact";
import StatDisplay from "./components/StatDisplay";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StatMain} />
          <Route path="/choice" exact component={StatChoice} />
          <Route path="/display/:woj/:pow?/:gm?" component={StatDisplay} />
          <Route path="/contact" exact component={StatContact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
