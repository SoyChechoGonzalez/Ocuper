import React from "react";
import "./Galeria.css";
// import images from "../../assets/images";
import Buttons from "../Buttons/Buttons";

const Galeria = () => {
  return (
    <React.Fragment>
      <section className="portafolio container aqua" id="portafolio">
        <div>
          <Buttons />
        </div>

        {/* <article className="gallery__port">
          <div className="interiorismo" id="interiorismo">
            <ul>
              <li>
                <picture className="img">
                  <img src={images[0]} alt="Fachada" size="5px" />
                </picture>
                <picture className="img">
                  <img src={images[1]} alt="Fachada" size="5px" />
                </picture>
                <picture className="img">
                  <img src={images[0]} alt="Fachada" size="5px" />
                </picture>
              </li>
            </ul>
          </div>
        </article> */}
      </section>
    </React.Fragment>
  );
};

export default Galeria;
