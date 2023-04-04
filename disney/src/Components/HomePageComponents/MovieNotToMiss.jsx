import React from "react";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider7 from "./Slider7";
import Slider8 from "./Slider8";
import Slider10 from "./Slider10";

const MoviesNotToMiss = () => {
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
        Movies Not To Miss
      </h2>
      <Slider10 />
    </div>
  );
};

export default MoviesNotToMiss;
