import React from "react";
import './style.css'
import first from '../../images/images/first.png'
import second from '../../images/images/second.webp'

import quarta from '../../images/images/quarta.webp'
import quinta from '../../images/images/quinta.jpg'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section>
        <p className="paragraph1">Primeira Reunião Gratuita</p>
        <h2>Uma firma especializada <br /> em direito Mercantil</h2>
        <p className="paragraph2">
          Direito mercantil, também conhecido como direito comercial, é a área jurídica que regulamenta as relações e transações comerciais entre empresas. Abrangendo contratos, sociedades, falências e outros aspectos, visa proporcionar um ambiente legal seguro para o desenvolvimento e operação das atividades comerciais, promovendo a justiça e equidade nas relações empresariais.
        </p>
        <h3>Ligue para nós e tiraremos suas dúvidas</h3>
        <p className="paragraph3">0034 911 310 647</p>
      </section>
      <div>
        <div className="frst-images">
          <img className="image1" src={first} alt="" />
          <img className="image2" src={quarta} alt="" />

        </div>
        <div>
          <img className="image3" src={quinta} alt="" />
          <img className="image4" src={second} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
