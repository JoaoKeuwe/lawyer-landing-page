import React from "react";
import "./style.css";

const FooterAboutUs = () => {
  return (
    <div className="container-footer-about">
      <div className="about-footer">
        <p>
          {" "}
          Atendimento presencial mediante <br />{" "}
          <span className="span"> agendamento prévio</span>
        </p>
        <button>Agende já!</button>
      </div>
    </div>
  );
};

export default FooterAboutUs;
