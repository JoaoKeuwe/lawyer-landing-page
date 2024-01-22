import React from "react";
import "./style.css";
import direito from "../../images/images/direito.svg";
import Cards from "../cards";
import card1 from "../../images/images/card1.svg";
import card2 from "../../images/images/card2.svg";
import card3 from "../../images/images/card3.svg";
import card4 from "../../images/images/card4.svg";
import card5 from "../../images/images/card5.svg";
import card6 from "../../images/images/card6.svg";
import FooterAboutUs from "../footer-about-us";

const BlogSection = () => {
  return (
    <>
      <div className="about-container" style={{ background: "#F6F6F6" }}>
        <div className="image-direito">
          <img src={direito} alt="" />
        </div>
        <div className="about-content">
          <h2 className="p1">Nossas experiências a sua disposição</h2>
          <p className="p2">
            Com vasta experiência em direito mercantil, nossa equipe está pronta
            para oferecer orientação jurídica sólida e personalizada para
            impulsionar o sucesso de seu negócio. Conte conosco para superar
            desafios com confiança e expertise.
          </p>
        </div>
        <div className="card-container">
          <Cards
            img={card1}
            title={"Direito Mercantil "}
            text={
            "O direito mercantil regula relações comerciais, incluindo contratos, sociedades e falências, buscando um ambiente jurídico propício ao desenvolvimento empresarial, promovendo justiça e eficiência."
            }
          />

          <Cards
            img={card2}
            title={"Direito Societario Mercantill "}
            text={
              "Direito Societário Mercantil: Regras para formação e operação de sociedades comerciais, cobrindo estruturação, responsabilidades e aspectos legais da gestão empresarial."
            }
          />
          <Cards
            img={card3}
            title={"Direito Fiscal "}
            text={
              "Direito Fiscal: Normas que regulam relações entre contribuintes e o Estado, envolvendo tributos e obrigações fiscais para assegurar legalidade e equidade na arrecadação."
            }
          />
          <Cards
            img={card4}
            title={"Direito Processal "}
            text={
              "Direito Processual: Normas que guiam procedimentos judiciais, definindo regras para resolver litígios de forma efetiva e justa."
            }
          />
          <Cards
            img={card5}
            title={"Valorização De Empresas "}
            text={
              "Valorização de empresas no direito:Avaliação do valor de uma empresa, considerando fatores legais, essencial em transações e negociações comerciais."
            }
          />
          <Cards
            img={card6}
            title={"Direito de competências "}
            text={
              "Direito de Concorrência: Regula a competição entre empresas para prevenir práticas anticoncorrenciais, assegurando um ambiente competitivo saudável e benefícios aos consumidores."
            }
          />
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
};

export default BlogSection;
