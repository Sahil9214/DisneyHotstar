import React from "react";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider7 from "./Slider7";
import Slider8 from "./Slider8";

const RomanceMovies = () => {
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
    Romance Movies
      </h2>
      <Slider8/>
    </div>
  );
};

export default RomanceMovies;
