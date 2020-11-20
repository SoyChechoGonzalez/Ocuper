import React from "react";
import "./Interiorismo__Gallery.css";

const Interiorismo_Gallery = () => {
  return (
    <React.Fragment>
      <section>
        <article className="encabezado">
          <div className="encabezado_item">
            <h1>CASA 3/13 DOBLE NIVEL</h1>
          </div>
          <div className="encabezado_item">
            <p>
              Proyecto de diseño interior que buscaba ampliar el espacio
              original, con dos pisos, el primero zonas comunes y el segundo
              habitaciones y baños buscando espacios amplios y abiertos, cuenta
              con dos habitaciones entre ellas la principal con baño y vestier.
            </p>
          </div>
        </article>
        <article className="grid_container">
          <div className="grid_item">1</div>
          <div className="grid_item">2</div>
          <div className="grid_item">3</div>
          <div className="grid_item">4</div>
          <div className="grid_item">5</div>
          <div className="grid_item">6</div>
          <div className="grid_item">7</div>
          <div className="grid_item">8</div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Interiorismo_Gallery;
