import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="logo">Occuper</div>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Sobre Occuper</a>
          </li>
          <li>
            <a href="/">Líneas de diseño</a>
            <ul>
              <li>
                <li>
                  <a href="/">Comercial</a>
                </li>
                <li>
                  <a href="/">Interiorismo</a>
                </li>
                <li>
                  <a href="/">Stand</a>
                </li>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
