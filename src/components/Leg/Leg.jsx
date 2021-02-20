import React from "react";
import BpkText from "bpk-component-text";

import STYLES from "./Leg.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const Leg = ({ leg }) => {
  const convertDuration = (duration) => {
    var hours = Math.floor(duration / 60);
    var minutes = duration % 60;
    return `${hours}h ${minutes < 10 ? "0" + minutes : minutes}`;
  };

  const convertTime = (time) => {
    return time.slice(time.length - 5, time.length);
  };

  return (
    <div className={getClassName("Leg")}>
      <div className={getClassName("Leg__logo-container")}>
        <img
          className={getClassName("Leg__logo")}
          src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
          alt="logo"
        />
      </div>
      <div className={getClassName("Leg__details")}>
        <div className={getClassName("Leg__places")}>
          <div className={getClassName("Leg__depart")}>
            <BpkText tagName="span" textStyle="base">
              {convertTime(leg.departure_time)}
            </BpkText>
            <BpkText
              tagName="span"
              textStyle="base"
              className={getClassName("Leg__airport")}
            >
              {leg.departure_airport}
            </BpkText>
          </div>
          <div className={getClassName("Leg__arrow-container")}>
            <svg
              className={getClassName("Leg__arrow")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2.69 12a1.5 1.5 0 0 0 1.5 1.5h11.379l-4.94 4.94a1.5 1.5 0 0 0 2.122 2.12L21.31 12l-8.56-8.56a1.5 1.5 0 0 0-2.122 2.12l4.94 4.94H4.19a1.5 1.5 0 0 0-1.5 1.5z"
              />
            </svg>
          </div>
          <div className={getClassName("Leg__arrive")}>
            <BpkText tagName="span" textStyle="base">
              {convertTime(leg.arrival_time)}
            </BpkText>
            <BpkText
              tagName="span"
              textStyle="base"
              className={getClassName("Leg__airport")}
            >
              {leg.arrival_airport}
            </BpkText>
          </div>
        </div>
        <div className={getClassName("Leg__info")}>
          <BpkText
            tagName="span"
            textStyle="sm"
            className={getClassName("Leg__full-time")}
          >
            {convertDuration(leg.duration_mins)}
          </BpkText>
          <BpkText
            tagName="span"
            textStyle="sm"
            className={getClassName(
              leg.stops > 0 ? "Leg__stops--red" : "Leg__stops--green"
            )}
          >
            {leg.stops
              ? leg.stops === 1
                ? `${leg.stops} stop`
                : `${leg.stops} stops`
              : "Direct"}
          </BpkText>
        </div>
      </div>
    </div>
  );
};

export default Leg;
