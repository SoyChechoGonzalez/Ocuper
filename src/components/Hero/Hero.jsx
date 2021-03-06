import React from "react";
import "./Hero.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <article className="hero__content">
          <h1>Diseño de Espacios</h1>
          <h2 className="typewriter" dataText="By. Luisa Betancur">
            By. Luisa Betancur
          </h2>
        </article>
        <article className="social">
          <ul>
            <li>
              <a href="https://www.instagram.com/disenoespacios.luisab/">
                <FaInstagram size="2.5rem" className="FaInstagram" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/disenoespacios.luisab/">
                <FaFacebook size="2.5rem" className="FaFacebook" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/573184489345?text=Buenas%20tardes,%20me%20interesa%20el%20servicio%20que%20ofreces%20">
                <ImWhatsapp size="2.5rem" className="ImWhatsapp" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Hero;
