import React from "react";
import Aqeedah1Schedule from "./Aqeedah1Schedule";
import Aqeedah2Shcedule from "./Aqeedah2Schedule";
import Arabic1Shedule from "./Arabic1Shedule";
import Arabic2Schedule from "./Arabic2Schedule";

const Schedule = () => {
  return (
    <div className="container mx-auto my-16">
      <Aqeedah1Schedule></Aqeedah1Schedule>
      <Aqeedah2Shcedule></Aqeedah2Shcedule>
      <Arabic1Shedule></Arabic1Shedule>
      <Arabic2Schedule></Arabic2Schedule>
    </div>
  );
};

export default Schedule;
