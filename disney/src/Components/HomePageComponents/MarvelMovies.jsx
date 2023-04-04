import React from "react";
import Slider4 from "./Slider4";
import Slider6 from "./Slider6";

const MarvelMovies = () => {
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
       Marvel Movies
      </h2>
      <Slider6 />
    </div>
  );
};

export default MarvelMovies;
