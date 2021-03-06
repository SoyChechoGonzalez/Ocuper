import React from "react";
import "./Designer.css";
import interiorismo_img from "../../assets/img/designer/designer_img";

const Designer = () => {
  return (
    <React.Fragment>
      <div>
        <section className="designer">
          <article className="paragraph">
            <h1>Luisa Maria Betancur</h1>
            <p>
              Diseñadora de espacios/ escenario, apasionada por crear,
              transformar y transmitir la identidad de cada proyecto para
              generar emociones y experiencias en los espacios que habitan las
              personas o marcas para la creación de atmósferas comerciales o
              personales. Soy una persona proactiva, dedicada, responsable, con
              capacidad de adaptación a cualquier situación, gustos o
              preferencias de las personas a las cuales voy a servir con mi
              labor como diseñadora, además de estas dispuesta al aprendizaje
              continuo.
            </p>
          </article>
          <article>
            <picture>
              <img
                src={interiorismo_img.designer}
                alt="Foto Luisa Betancur"
                size=""
                className="img"
              />
            </picture>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Designer;
