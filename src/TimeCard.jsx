import React from "react";
import "./TimeCard.css";
import imgs from "./Image";

const timeCard = (props) => {
  const i = imgs.findIndex((img) => {
    return img.title === props.title;
  });

  return (
    <div className="time-card" style={{ backgroundColor: imgs[i].color }}>
      <div className="img-container">
        <img
          src={imgs[i].img}
          className="background-icon"
          alt="background img"
        />
      </div>
      <div className="bottom-time-card">
        <h5 className="time-card-title">{props.title} ...</h5>
        <h1 className="time-card-hrs">{props.current}hrs</h1>
        <p className="time-card-last">Last Week - {props.previous} hrs</p>
      </div>
    </div>
  );
};

export default timeCard;
