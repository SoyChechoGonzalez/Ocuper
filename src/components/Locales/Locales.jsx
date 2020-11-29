import React from "react";
import "./Locales.css";
import { BrowserRouter as Router } from "react-router-dom";
import interiorismo_img from "../../assets/img/interiorismo/interiorismo_img";

const Locales = () => {
  return (
    <Router>
      <section className="main__section locales">
        <img
          src={interiorismo_img.san_javier7}
          alt=""
          className="image"
          width="100%"
        />
        <h1 className="title">Locales</h1>
        <article className="container">
          <div className="item"></div>
        </article>
      </section>
    </Router>
  );
};

export default Locales;
