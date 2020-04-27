import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Material from "./screens/Material";
import Locations from "./screens/Locations";
import Team from "./screens/Team";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/materials" component={Material} />
        <Route path="/locations" component={Locations} />
        <Route path="/team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
