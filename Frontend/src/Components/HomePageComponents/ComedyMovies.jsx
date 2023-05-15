import React from "react";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider7 from "./Slider7";

const ComedyMovies = () => {
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
    Comedy Movies
      </h2>
      <Slider7/>
    </div>
  );
};

export default ComedyMovies;
