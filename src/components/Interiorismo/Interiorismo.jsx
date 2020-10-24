import React from "react";
import "./Interiorismo.css";
import images from "../../assets/images";

const Interiorismo = () => {
  return (
    <React.Fragment>
      <section className="container" id="interiorismo">
        <article className="gallery">
          <img src={images[0]} alt="Fachada" />
        </article>
      </section>
    </React.Fragment>
  );
};

export default Interiorismo;
