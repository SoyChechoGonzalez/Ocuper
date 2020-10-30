import React from "react";
import "./Buttons.css";

const Buttons = () => {
  return (
    <React.Fragment>
      <section className="buttons__port">
        <div className="button__port" id="interiorismo">
          Interiorismo
        </div>
        <div className="button__port" id="oficinas">
          Oficinas
        </div>
        <div className="button__port" id="stands">
          Stands
        </div>
        <div className="button__port" id="fachadas">
          Fachadas
        </div>
        <div className="button__port" id="locales">
          Locales
        </div>
      </section>
    </React.Fragment>
  );
};

export default Buttons;
