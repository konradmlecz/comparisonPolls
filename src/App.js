import React from "react";
import "./App.css";
import Stat from "./components/Stat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StatMain from "./components/StatMain";
import StatContact from "./components/StatContact";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StatMain} />
          <Route path="/stat" exact component={Stat} />
          <Route path="/contact" exact component={StatContact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
