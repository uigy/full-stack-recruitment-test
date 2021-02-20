import React from "react";
import BpkText from "bpk-component-text";
import BpkButton from "bpk-component-button";

import Leg from "../Leg";

import STYLES from "./Itinerary.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const Itinerary = ({ itinerary, legs }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const itineraryLegs = legs.filter((leg) => itinerary.legs.includes(leg.id));
  return (
    <div className={getClassName("Itinerary")}>
      {itineraryLegs.map((leg) => (
        <Leg key={leg.id} leg={leg} />
      ))}
      <div className={getClassName("Itinerary__price-info")}>
        <BpkText tagName="span" textStyle="xxl">
          {itinerary.price}
        </BpkText>
        <BpkText
          className={getClassName("Itinerary__agent")}
          tagName="span"
          textStyle="base"
        >
          {itinerary.agent}
        </BpkText>
      </div>
      <div className={getClassName("Itinerary__select")}>
        <BpkButton onClick={(e) => handleClick(e)}>Select</BpkButton>
      </div>
    </div>
  );
};

export default Itinerary;
