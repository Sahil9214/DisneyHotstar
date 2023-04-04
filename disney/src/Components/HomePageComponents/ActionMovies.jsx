import React from "react";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";

const ActionMovies = () => {
  return (
    <div
      style={{
        width: "96%",
        margin: "auto",

        justifyContent: "left",
        textAlign: "left",
      }}
    >
      <h2
        className="starPlush2"
        style={{
          textAlign: "left",
          justifyContent: "left",
        }}
      >
     Action Movies
      </h2>
      <Slider5/>
    </div>
  );
};

export default ActionMovies;
