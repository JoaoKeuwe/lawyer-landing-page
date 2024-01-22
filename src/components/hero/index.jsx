import React from "react";
import "./style.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <p className="p">Primeia reunião Gratuita</p>
          <h1>
            Serviços onlines <br /> & Presenciais
          </h1>
          <p className="paragraph">


                      Descubra o direito mercantil conosco - seu escritório especializado. Oferecemos soluções personalizadas para empresas, com atendimento presencial e online. Da constituição ao litígio, nossa equipe está comprometida em fornecer suporte jurídico estratégico para impulsionar seus negócios. Confie em nós para proteger seus interesses no universo dinâmico do direito mercantil.
          </p>
          <div className="button-group">
            <button className="button-information"> + Informações</button>

            <button className="button-more">Saber mais</button>
          </div>
        </div>
      </div>
      <div className="know-more">
        <p>Quer saber o que mais podemos fazer por você?</p>
      </div>
    </>
  );
};

export default Hero;
