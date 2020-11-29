import React from "react";
import "./Stands.css";
import { BrowserRouter as Router } from "react-router-dom";
import interiorismo_img from "../../assets/img/interiorismo/interiorismo_img";

const Stands = () => {
  return (
    <Router>
      <section className="main__section stands">
        <img
          src={interiorismo_img.san_javier7}
          alt=""
          className="image"
          width="100%"
        />
        <h1 className="title">Stands</h1>
        <article className="container">
          <div className="item"></div>
        </article>
      </section>
    </Router>
  );
};

export default Stands;
