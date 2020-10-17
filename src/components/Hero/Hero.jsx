import React from "react";
import "./Hero.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <article className="hero__content">
          <h1>Diseño & Espacio</h1>
        </article>
        <article className="social">
          <ul>
            <li>
              <a href="/" className="FaInstagram">
                <FaInstagram size="4rem" />
              </a>
            </li>
            <li>
              <a href="/" className="FaFacebook">
                <FaFacebook size="4rem" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Hero;
