import React from "react";
import fb from "../../images/logos/fb.svg";
import tw from "../../images/logos/tw.svg";
import ig from "../../images/logos/ig.svg";
import linkedin from "../../images/logos/linkedin.svg";
import location from "../../images/logos/location.svg";
import phone from "../../images/logos/phone.svg";
import email from "../../images/logos/email.svg";
import search from '../../images/logos/search.svg';
import logo from '../../images/images/logo.png'
import './style.css'

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar-container">
        <div className="navbar-content">
          <ul className="list-itens">
            <li>
              <img src={location} alt="location" />
              Velázquez 53, 2º Izda 28001 Madrid
            </li>
            <li style={{ alignItems: "baseline" }}>
              <img src={email} alt="email" />
              info@abogadosvelazquez.es
            </li>
            <li>
              <img src={phone} alt="phone" />
              911 31 06 47
            </li>
          </ul>
        </div>

        <div className="pages-container">
          <img src={fb} alt="facebook" />
          <img src={tw} alt="twitter" />
          <img src={ig} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img style={{ width: "30px", background: "#B79D5B", padding: '15px', marginLeft: "15px" }} src={search} alt="" />
        </div>
      </nav>
      <div className="sub-navbar-container" >
        <img src={logo} alt="logo da empresa" />
        <ul className="navbar-list">
          <li>Inicio</li>
          <li>Sobre Nós</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
