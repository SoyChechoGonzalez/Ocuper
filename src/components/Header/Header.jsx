import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
            <a href="#portafolio">Portafolio</a>
          </li>
          <li>
            <a href="#about">Sobre Occuper</a>
          </li>
          <li>
            <a href="#motodologia">Metodología</a>
          </li>
          <li>
            <a href="#diseñadora">Diseñadora</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <span>
          <FontAwesomeIcon className={"faBars"} icon={faBars} />
        </span>
      </nav>
    </div>
  );
};

export default Header;
