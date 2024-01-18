import React from "react";
import "./style.css";
import calender from "../../images/logos/calender.png";
import pasta from "../../images/logos/pasta.png";

const CardNews = ({ image, title, information, date }) => {
  return (
    <div className="news-container">
      <div className="card-news">
        <img className="image-news" src={image} alt="" />
        <h2>{title}</h2>
        <div className="card-info">
          <p style={{ color: "#CCBD99" }}>
            <img style={{ width: "15px", marginRight: "20px", marginLeft: "20px" }} src={calender} alt="" />
            {information}
          </p>
          <div>
            <p style={{ color: "#CCBD99", marginRight: '20px' }}>
              <img
                style={{ width: "15px", marginRight: "20px", marginLeft: "20px" }}
                src={pasta}
                alt=""
              />
              {date}
            </p>
          </div>
        </div>
        <p style={{ color: "#CCBD99", marginLeft: '20px'}}>Ler mais</p>
      </div>
    </div>
  );
};

export default CardNews;
