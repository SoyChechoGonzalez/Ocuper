import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FaInstagram, FaFacebook } from "react-icons/fa";
// import { ImWhatsapp } from "react-icons/im";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <logo>
          <a href="index.html" className="logo">
            Occuper
          </a>
        </logo>
        <ul>
          <li>
            <a href="#interiorismo">interiorismo</a>
          </li>
          <li>
            <a href="#oficinas">oficinas</a>
          </li>
          <li>
            <a href="#stands">stands</a>
          </li>
          <li>
            <a href="#fachadas">fachadas</a>
          </li>
          <li>
            <a href="#locales">locales</a>
          </li>
          <li>
            <a href="#otros">otros</a>
          </li>
          <li>
            <a href="#about" className="dropdown">
              sobre occuper
            </a>
            <ul>
              {/* <li>
                <a href="/" className="logo2">
                  sobre occuper
                </a>
              </li>
              <li>
                <a href="/">metodologia</a>
              </li> */}
              <li>
                <a href="#designer">diseñadora</a>
              </li>
              <li>
                <a href="#contact">contacto</a>
              </li>
            </ul>
          </li>
        </ul>
        {/* <article className="social">
          <ul>
            <li>
              <a href="https://www.instagram.com/disenoespacios.luisab/">
                <FaInstagram size="1.5rem" className="FaInstagram" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/disenoespacios.luisab/">
                <FaFacebook size="1.5rem" className="FaFacebook" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/573184489345?text=Buenas%20tardes,%20me%20interesa%20el%20servicio%20que%20ofreces%20">
                <ImWhatsapp size="1.5rem" className="ImWhatsapp" />
              </a>
            </li>
          </ul>
        </article> */}
        <span>
          <FontAwesomeIcon className={"faBars"} icon={faBars} />
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
