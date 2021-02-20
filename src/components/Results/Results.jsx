import React, { useState, useEffect } from "react";

import Itinerary from "../Itinerary";

import STYLES from "./Results.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const Results = ({ data }) => {
  return (
    <div className={getClassName("Results")}>
      {data.itineraries.map((itinerary) => (
        <Itinerary key={itinerary.id} itinerary={itinerary} legs={data.legs} />
      ))}
    </div>
  );
};

export default Results;
