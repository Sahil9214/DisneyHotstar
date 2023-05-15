import React from "react";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider7 from "./Slider7";
import Slider9 from "./Slider9";

const BestForKids= () => {
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
    Best For Kids
      </h2>
      <Slider9/>
    </div>
  );
};

export default BestForKids;
