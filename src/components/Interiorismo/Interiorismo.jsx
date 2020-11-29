import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Interiorismo.css";
import interiorismo_img from "../../assets/img/interiorismo/interiorismo_img";

const Interiorismo = () => {
  return (
    <Router>
      <section className="container" id="interiorismo">
        <article className="info">
          <h1>casa 3/13 doble nivel</h1>
          <p>
            Proyecto de diseño interior que buscaba ampliar el espacio original,
            con dos pisos, el primero zonas comunes y el segundo habitaciones y
            baños buscando espacios amplios y abiertos, cuenta con dos
            habitaciones entre ellas la principal con baño y vestier.{" "}
          </p>
          <h2>Diseño</h2>
          <span className="linea"></span>
        </article>
        {/* San Javier Diseño */}
        <article className="grid__gallery">
          <a href="#san_javier1">
            <img src={interiorismo_img.san_javier1} alt="" />
          </a>

          <a href="#san_javier2">
            <img src={interiorismo_img.san_javier2} alt="" />
          </a>

          <a href="#san_javier3">
            <img src={interiorismo_img.san_javier3} alt="" />
          </a>

          <a href="#san_javier4">
            <img src={interiorismo_img.san_javier4} alt="" />
          </a>

          <a href="#san_javier5">
            <img src={interiorismo_img.san_javier5} alt="" />
          </a>

          <a href="#san_javier6">
            <img src={interiorismo_img.san_javier6} alt="" />
          </a>

          <a href="#san_javier7">
            <img src={interiorismo_img.san_javier7} alt="" />
          </a>
        </article>
        {/* San Javier Antes */}
        <article className="info">
          <h2>Antes</h2>
          <span className="linea"></span>
        </article>

        <article className="grid__gallery">
          <a href="#san_javier_antes1">
            <img src={interiorismo_img.san_javier_antes1} alt="" />
          </a>

          <a href="#san_javier_antes2">
            <img src={interiorismo_img.san_javier_antes2} alt="" />
          </a>

          <a href="#san_javier_antes3">
            <img src={interiorismo_img.san_javier_antes3} alt="" />
          </a>

          <a href="#san_javier_antes4">
            <img src={interiorismo_img.san_javier_antes4} alt="" />
          </a>
        </article>

        {/* LightBox */}
        <article className="lightbox" id="san_javier1">
          <a href="#san_javier7">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier1} alt="" />
          <a href="#san_javier2">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier 2 */}
        <article className="lightbox" id="san_javier2">
          <a href="#san_javier1">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier2} alt="" />
          <a href="#san_javier3">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier 3 */}
        <article className="lightbox" id="san_javier3">
          <a href="#san_javier2">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier3} alt="" />
          <a href="#san_javier4">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier 4 */}
        <article className="lightbox" id="san_javier4">
          <a href="#san_javier3">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier4} alt="" />
          <a href="#san_javier5">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier 5*/}
        <article className="lightbox" id="san_javier5">
          <a href="#san_javier4">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier5} alt="" />
          <a href="#san_javier6">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier 6 */}
        <article className="lightbox" id="san_javier6">
          <a href="#san_javier5">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier6} alt="" />
          <a href="#san_javier7">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier 7 */}
        <article className="lightbox" id="san_javier7">
          <a href="#san_javier6">
            <IoIosArrowForward size="2rem" className="IoIosArrowBack" />
          </a>

          <img src={interiorismo_img.san_javier7} alt="" />
          <a href="#san_javier1">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* San Javier Antes 1 */}
        <article className="lightbox" id="san_javier_antes1">
          <a href="#san_javier_antes4">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>
          <img src={interiorismo_img.san_javier_antes1} alt="" />
          <a href="#san_javier_antes2">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        <article className="lightbox" id="san_javier_antes2">
          <a href="#san_javier_antes1">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>
          <img
            src={interiorismo_img.san_javier_antes2}
            alt="San Javier Antes"
          />
          <a href="#san_javier_antes3">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        <article className="lightbox" id="san_javier_antes3">
          <a href="#san_javier_antes2">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>
          <img
            src={interiorismo_img.san_javier_antes3}
            alt="San Javier Antes"
          />
          <a href="#san_javier_antes4">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
        <article className="lightbox" id="san_javier_antes4">
          <a href="#san_javier_antes3">
            <IoIosArrowBack size="2rem" className="IoIosArrowBack" />
          </a>
          <img
            src={interiorismo_img.san_javier_antes4}
            alt="San Javier Antes"
          />
          <a href="#san_javier_antes1">
            <IoIosArrowForward size="2rem" className="IoIosArrowForward" />
          </a>
          <a href="#">
            <AiOutlineClose size="2rem" className="AiOutlineClose" />
          </a>
        </article>
      </section>
    </Router>
  );
};

export default Interiorismo;
