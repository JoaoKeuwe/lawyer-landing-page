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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
          ex fugiat ducimus minima.
        </p>
      </div>
      <div className="news-container">
        <CardNews
          image={valo}
          title={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}
          information={"Categoria"}
          date={"11 janeiro 2024"}
        />

        <CardNews
          image={calculator}
          title={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}
          information={"Categoria"}
          date={"06 Janeiro 2024"}
        />

        <CardNews
          image={ambiente}
          title={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}
          information={"Categoria"}
          date={"30 Dezembro 2023"}
        />
      </div>
    </div>
  );
};

export default News;
