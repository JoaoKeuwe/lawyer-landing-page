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
          <p className="p1">Nossas experiências a sua disposição</p>
          <p className="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
            ex fugiat ducimus minima.
          </p>
        </div>
        <div className="card-container">
          <Cards
            img={card1}
            title={"Derecho Mercantil "}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            }
          />

          <Cards
            img={card2}
            title={"Derecho Societario Mercantill "}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            }
          />
          <Cards
            img={card3}
            title={"Derecho Fiscal "}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            }
          />
          <Cards
            img={card4}
            title={"Derecho Procesal "}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            }
          />
          <Cards
            img={card5}
            title={"Valoración De Empresas "}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            }
          />
          <Cards
            img={card6}
            title={"Derecho De La Competencia "}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
            }
          />
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
};

export default BlogSection;
