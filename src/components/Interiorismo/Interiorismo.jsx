import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Interiorismo.css";
import interiorismo_img from "../../assets/img/interiorismo/interiorismo_img";

const Interiorismo = () => {
  return (
    <Router>
      <section className="main__section interiorismo">
        <img
          src={interiorismo_img.san_javier1}
          alt=""
          className="image"
          width="100%"
        />
        <h1 className="title">Interiorismo</h1>
        <article className="container">
          <div className="grid-item">
            <div className="item">
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
            </div>
            <div className="item">
              <h1>Casa 3/13 Dos pisos</h1>
              <p>
                Proyecto de diseño interior que buscaba ampliar el espacio
                original, con dos pisos, el primero zonas comunes y el segundo
                habitaciones y baños buscando espacios amplios y abiertos,
                cuenta con dos habitaciones entre ellas la principal con baño y
                Vestier.
              </p>
            </div>
            <div className="item">
              <h1>Apartamentos Gaia- Área1</h1>
              <p>
                Plantas ambientadas para la empresa Área 1 y su proyecto Gaia
                ubicado en La Ceja- Antioquia.
              </p>
            </div>
            <div className="item">
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
            </div>
            <div className="item">
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
              <div className="sub-item imagen"></div>
            </div>
            <div className="item">
              <h1>Zona húmeda la purísima- Área 1</h1>
              <p>
                Un proyecto de la empresa Área 1 en la que se requería un
                espacio exterior interactivo a necesidad de sus clientes, que
                contara con zona húmeda y un sector para el descanso y la
                diversión.
              </p>
            </div>
          </div>
        </article>
      </section>
    </Router>
  );
};

export default Interiorismo;
