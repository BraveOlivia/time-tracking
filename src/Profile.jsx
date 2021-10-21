import React from "react";
import bio from "./images/image-jeremy.png";
import Profile from "./Profile.css";

const profile = (props) => {
  function buttonHandler(event) {
    props.onClick(event.target.name);
  }

  return (
    <div className="card-container">
      <div className="top-card">
        <img src={bio} className="avatar" alt="Jeremy Robson bio" />
        <p className="report">Report for</p>
        <h1 className="user-name">Jeremy Robson</h1>
      </div>
      <div className="bottom-card">
        <button name="daily" onClick={buttonHandler}>
          Daily
        </button>
        <button name="weekly" onClick={buttonHandler}>
          Weekly
        </button>
        <button name="monthly" onClick={buttonHandler}>
          Monthly
        </button>
      </div>
    </div>
  );
};

export default profile;
