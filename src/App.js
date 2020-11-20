import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Interiorismo from "./components/Interiorismo/";
import Oficinas from "./components/Oficinas/";
import Stands from "./components/Stands/";
import Fachadas from "./components/Fachadas/";
import Locales from "./components/Locales/";
import Designer from "./components/Designer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/interiorismo">
            <Interiorismo />
          </Route>
          <Route path="/oficinas">
            <Oficinas />
          </Route>
          <Route path="/stands">
            <Stands />
          </Route>
          <Route path="/fachadas">
            <Fachadas />
          </Route>
          <Route path="/locales">
            <Locales />
          </Route>
          <Route path="/otros">lorem</Route>
          <Route path="/designer">
            <Designer />
          </Route>
        </Switch>
        {/* 
        <div>
          <Hero />
        </div>
        <div>
          <Interiorismo />
        </div>
        <div>
          <Designer />
        </div>
        <div>
          <Stands />
        </div>
        <div>
          <Fachadas />
        </div>
        <div>
          <Locales />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
