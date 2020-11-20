import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineClose,
} from "react-icons/ai";
import "./Interiorismo.css";
import images from "../../assets/images";

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
          <span className="linea"></span>
        </article>
        <article className="grid__gallery">
          {/* Imagen 0 */}
          <a href="#imagen0">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 1 */}
          <a href="#imagen1">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 2 */}
          <a href="#imagen2">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 3 */}
          <a href="#imagen3">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 4 */}
          <a href="#imagen4">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 5 */}
          <a href="#imagen5">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 6 */}
          <a href="#imagen6">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 7 */}
          <a href="#imagen7">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 8 */}
          <a href="#imagen8">
            <img src={images[0]} alt="" />
          </a>
          {/* Imagen 9 */}
          <a href="#imagen9">
            <img src={images[0]} alt="" />
          </a>
        </article>
        {/* Imagen 0 */}
        <article className="lightbox" id="imagen0">
          <a href="#imagen9">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen1">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 1 */}
        <article className="lightbox" id="imagen1">
          <a href="#imagen0">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen2">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 2 */}
        <article className="lightbox" id="imagen2">
          <a href="#imagen1">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen3">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 3 */}
        <article className="lightbox" id="imagen3">
          <a href="#imagen2">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen4">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 4 */}
        <article className="lightbox" id="imagen4">
          <a href="#imagen3">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen5">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 5*/}
        <article className="lightbox" id="imagen5">
          <a href="#imagen4">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen6">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 6 */}
        <article className="lightbox" id="imagen6">
          <a href="#imagen5">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen7">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 7 */}
        <article className="lightbox" id="imagen7">
          <a href="#imagen6">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen8">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 8 */}
        <article className="lightbox" id="imagen8">
          <a href="#imagen7">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen9">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
        {/* Imagen 9 */}
        <article className="lightbox" id="imagen9">
          <a href="#imagen8">
            <AiOutlineArrowLeft size="2.5rem" className="AiOutlineArrowLeft" />
          </a>

          <img src={images[0]} alt="" />
          <a href="#imagen0">
            <AiOutlineArrowRight
              size="2.5rem"
              className="AiOutlineArrowRight"
            />
          </a>
          <a href="#">
            <AiOutlineClose size="2.5rem" className="AiOutlineClose" />
          </a>
        </article>
      </section>
    </Router>
  );
};

export default Interiorismo;
