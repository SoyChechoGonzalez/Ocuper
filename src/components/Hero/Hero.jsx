import React from "react";
import "./Hero.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <article className="hero__content">
          <h1>Diseño & Espacio</h1>
          <h2 className="typewriter" dataText="By. Luisa Betancur">
            By. Luisa Betancur
          </h2>
        </article>
        <article className="social">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/disenoespacios.luisab/"
                className="FaInstagram"
              >
                <FaInstagram size="3rem" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/disenoespacios.luisab/"
                className="FaFacebook"
              >
                <FaFacebook size="3rem" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Hero;
