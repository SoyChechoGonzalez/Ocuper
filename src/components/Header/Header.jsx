import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Occuper</div>
        <ul>
          <li>
            <a href="/">Interiorismo</a>
          </li>
          <li>
            <a href="/">Oficinas</a>
          </li>
          <li>
            <a href="/">Stands</a>
          </li>
          <li>
            <a href="/">Fachadas</a>
          </li>
          <li>
            <a href="/">Locales</a>
          </li>
          <li>
            <div></div>
            <a href="/">Sobre Occuper</a>
            <span>
              <FontAwesomeIcon className={"faAngleDown"} icon={faAngleDown} />
            </span>
            <ul>
              <li>
                <a href="/" className="logo2">
                  Occuper
                </a>
              </li>
              <li>
                <a href="/">Metodología</a>
              </li>
              <li>
                <a href="/">Diseñadora</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
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
