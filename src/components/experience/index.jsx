import React from "react";
import "./style.css";
import ana from "../../images/images/ana.png";
import ignacio from "../../images/images/ignacio.png";
import antoni from "../../images/images/antoni.png";

const Experience = () => {
  return (
    <div>
      <div>
        <div className="image-direito"></div>
        <div className="about-content">
          <p className="p1">Nossas experiências a sua disposição</p>
          <p className="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
            ex fugiat ducimus minima.
          </p>
        </div>
      </div>
      <div className="images-team">
        <div className="card-team">
          <img src={ana} alt="" />
          <h2>Ana Isabel Menchén López</h2>
          <p>
            Socio Director Abogado Mercantil <br /> – Financiero – Societario.
          </p>
        </div>

        <div className="card-team">
          <img src={ignacio} alt="" />
          <h2>Ignacio Illán García</h2>
          <p>Abogado – Auditor</p>
        </div>

        <div className="card-team">
          <img src={antoni} alt="" />
          <h2>Antoni Seguí Alcaraz</h2>
          <p>
            Socio economista – administrador <br /> concursal – mediador
            concursal – economista
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button-team">Fale com nossa equipe</button>
      </div>
    </div>
  );
};

export default Experience;
