import React from "react";
import "./style.css";
import ana from "../../images/images/ana.png";
import ignacio from "../../images/images/ignacio.png";
import antoni from "../../images/images/antoni.png";
import experience from "../../images/images/experience.svg";
import woman from "../../images/images/woman.webp";

const Experience = () => {
  return (
    <div>
      <div>
        <div className="image-direito">
          <img
            style={{ width: "100px", marginTop: "20px" }}
            src={experience}
            alt=""
          />
        </div>
        <div className="about-content">
          <p className="p1">Nosso Time está a sua disposição!</p>
          <p className="p2">
            Nosso time é composto por profissionais jurídicos apaixonados e
            dedicados, especializados em direito mercantil. Com vasta
            experiência e comprometimento, estamos prontos para oferecer
            soluções personalizadas que atendam às suas necessidades comerciais.
            Conte conosco para uma parceria sólida e orientada ao sucesso.
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
            concursal <br /> – economista
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button-team">Fale com nossa equipe</button>
      </div>

      <div className="feedback">
        <div className="feedbacks-content">
          <p style={{ color: "white" }}>
            “Estou extremamente satisfeito com o atendimento excepcional e os resultados impressionantes que obtive no escritório de advocacia. A equipe demonstrou profissionalismo exemplar, oferecendo orientação perspicaz em questões de direito mercantil. Suas habilidades resultaram em soluções eficazes para minha empresa. Recomendo calorosamente pela expertise e atenção personalizada.”
          </p>

          <div className="woman-container">
            <img src={woman} alt="" />
            <div className="information-woman">
              <h2>Giovanna Lopes</h2>
              <p>Administradora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
