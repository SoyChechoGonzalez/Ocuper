import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FaInstagram, FaFacebook } from "react-icons/fa";
// import { ImWhatsapp } from "react-icons/im";
import images from "../../assets/img/images.jsx";

const Navbar = () => {
  return (
    <header>
      <Link to="/" exact>
        <img src={images.imagen1} alt="" className="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/interiorismo">interiorismo</Link>
          </li>
          <li>
            <Link to="/oficinas">oficinas</Link>
          </li>
          <li>
            <Link to="/stands">stands</Link>
          </li>
          <li>
            <Link to="/fachadas">fachadas</Link>
          </li>
          <li>
            <Link to="/locales">locales</Link>
          </li>
          <li>
            <Link to="/otros">otros</Link>
          </li>
          <li>
            <span to="/about" className="dropdown">
              sobre occuper
            </span>
            <ul>
              {/* <li>
                <Link to="/" className="logo2">
                  sobre occuper
                </Link>
              </li>
              <li>
                <Link to="/">metodologia</Link>
              </li> */}
              <li>
                <Link to="/designer">diseñadora</Link>
              </li>
              <li>
                <Link to="#contact">contacto</Link>
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
      </nav>
    </header>
  );
};

export default Navbar;
