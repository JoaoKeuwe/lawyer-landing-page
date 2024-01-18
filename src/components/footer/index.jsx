/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./style.css";
import logo from "../../images/images/logo.png";
import social from "../../images/logos/rrss.svg";
import loc from "../../images/images/loc.svg";
import phone from "../../images/images/phone.svg";
import email from "../../images/images/email.svg";
import star from "../../images/images/star.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-content">
        <div>
          <img src={logo} alt="" />
        </div>
        <img src={social} alt="" />
      </div>
      <div className="contact">
        <div className="contact-content">
          <p>Contatos</p>
          <ul className="ul">
            <li>
              <img src={loc} alt="" />
              Velázquez 53, 2º Izda <br />
              28001 Madrid
            </li>

            <li>
              <img src={phone} alt="" />
              +0034 911 310 647
            </li>

            <li>
              <img src={email} alt="" />
              info@abogadosvelazquez.es
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-content">
        <p>Serviços Juridicos</p>
        <ul className="ul">
          <li>
            <img src={star} alt="" />
            Derecho Mercantil
          </li>

          <li>
            <img src={star} alt="" />
            Derecho Societario Mercantill
          </li>

          <li>
            <img src={star} alt="" />
            Derecho Fiscal
          </li>

          <li>
            <img src={star} alt="" />
            Derecho Procesal
          </li>

          <li>
            <img src={star} alt="" />
            Valoración De Empresas
          </li>

          <li>
            <img src={star} alt="" />
            Derecho De La Competencia
          </li>
        </ul>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14628.001361264596!2d-46.621337578315746!3d-23.5684312607175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1705604754784!5m2!1sen!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </footer>
  );
};

export default Footer;
