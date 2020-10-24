import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interiorismo from "./components/Interiorismo";
import Oficinas from "./components/Oficinas/";
import Stands from "./components/Stands/";
import Fachadas from "./components/Fachadas/";
import Locales from "./components/Locales/";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Interiorismo />
      </div>
      <div>
        <Oficinas />
      </div>
      <div>
        <Stands />
      </div>
      <div>
        <Fachadas />
      </div>
      <div>
        <Locales />
      </div>
    </div>
  );
}

export default App;
