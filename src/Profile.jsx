import React, { useState } from "react";
import bio from "./images/image-jeremy.png";
import "./Profile.css";

const Profile = (props) => {
  const [active, setActive] = useState("daily");

  function buttonHandler(event) {
    props.onClick(event.target.name);
    setActive(event.target.name);
  }

  return (
    <div className="card-container">
      <div className="top-card">
        <div className="column l">
          <img src={bio} className="avatar" alt="Jeremy Robson bio" />
        </div>
        <div className="column">
          <p className="report">Report for</p>
          <h1 className="user-name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="bottom-card">
        <button
          name="daily"
          onClick={buttonHandler}
          style={{ color: active === "daily" && "white" }}
        >
          Daily
        </button>
        <button
          name="weekly"
          onClick={buttonHandler}
          style={{ color: active === "weekly" && "white" }}
        >
          Weekly
        </button>
        <button
          name="monthly"
          onClick={buttonHandler}
          style={{ color: active === "monthly" && "white" }}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Profile;
