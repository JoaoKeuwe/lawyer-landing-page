import React from "react";
import "./style.css";
import news from "../../images/images/news.svg";
import CardNews from "../cardNews";
import ambiente from "../../images/images/madiombiente.png";
import valo from "../../images/images/valo.png";
import calculator from "../../images/images/calculator.png";

const News = () => {
  return (
    <div>
      <div className="image-direito">
        <img style={{ width: "100px", marginTop: "20px" }} src={news} alt="" />
      </div>
      <div className="about-content">
        <p className="p1">Noticias interessantes</p>
        <p className="p2">
          Descubra insights jurídicos em nosso blog, abordando temas como
          direito mercantil, societário, fiscal e de concorrência. Fique
          atualizado com análises especializadas e dicas práticas para
          negócios..
        </p>
      </div>
      <div className="news-container">
        <CardNews
          image={valo}
          title={"Estratégias Legais para Fortalecer sua Empresa no Direito Mercantil"}
          information={"Categoria"}
          date={"11 janeiro 2024"}
        />

        <CardNews
          image={calculator}
          title={"Os Impactos Jurídicos das Novas Regulações Fiscais: O Que Você Precisa Saber"}
          information={"Categoria"}
          date={"06 Janeiro 2024"}
        />

        <CardNews
          image={ambiente}
          title={"Concorrência Justa: Como Garantir a Adesão às Normas Antitruste em Seu Negócio"}
          information={"Categoria"}
          date={"30 Dezembro 2023"}
        />
      </div>
    </div>
  );
};

export default News;
