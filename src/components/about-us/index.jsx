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
        <h2>uma firma especializada <br /> em direito Mercantil</h2>
        <p className="paragraph2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          corporis blanditiis illo, nulla, consequuntur beatae molestias
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
