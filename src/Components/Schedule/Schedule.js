import React from "react";
import Aqeedah1Schedule from "./Aqeedah1Schedule";
import Aqeedah2Shcedule from "./Aqeedah2Shcedule";
import ArabicSchedule from "./ArabicSchedule";

const Schedule = () => {
  return (
    <div className="container mx-auto my-16">
      <Aqeedah1Schedule></Aqeedah1Schedule>
      <Aqeedah2Shcedule></Aqeedah2Shcedule>
      <ArabicSchedule></ArabicSchedule>
    </div>
  );
};

export default Schedule;
