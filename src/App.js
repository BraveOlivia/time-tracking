import React, { useState } from "react";
import Profile from "./Profile";
import TimeCard from "./TimeCard";
import records from "./data.json";
import "./App.css";

function App() {
  const [frequency, setFrequency] = useState("daily");

  function frequencyHandler(e) {
    setFrequency(e);
  }

  return (
    <div className="row">
      <div className="col left">
        <Profile onClick={frequencyHandler} />
      </div>
      <div className="col right">
        {records.map((record, index) => {
          return (
            <TimeCard
              key={index}
              frequency={frequency}
              title={record.title}
              current={record.timeframes[frequency].current}
              previous={record.timeframes[frequency].previous}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
