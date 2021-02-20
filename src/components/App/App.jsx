import React, { useState, useEffect } from "react";
import BpkText from "bpk-component-text";

import Header from "../Header";
import Results from "../Results";

import STYLES from "./App.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const API = "./flights.json";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={getClassName("App")}>
      <Header />
      <main className={getClassName("App__main")}>
        {error ? (
          <BpkText tagName="p">{error.message}</BpkText>
        ) : isLoading ? (
          <BpkText tagName="p">Loading...</BpkText>
        ) : (
          data && <Results data={data} />
        )}
      </main>
    </div>
  );
};

export default App;
