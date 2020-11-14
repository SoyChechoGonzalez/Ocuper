import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Interiorismo from "./components/Interiorismo/";
import Stands from "./components/Stands/";
import Fachadas from "./components/Fachadas/";
import Locales from "./components/Locales/";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Interiorismo />
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
