import React from "react";
import "../../CSS/StarPlusShow.css";
import { Text, Box, Flex } from "@chakra-ui/react";
import Slider2 from "./Slider2";
const StarPlusShow = () => {
  return (
    <div
      style={{
        width: "96%",
        margin: "auto",
        
        justifyContent: "left",
        textAlign:"left"
      }}
    >
      <h2
        className="starPlush2"
        style={{
          textAlign: "left",
          justifyContent: "left",
       
         
        }}
      >
        Star Plus Show
      </h2>
      <Slider2 />
    </div>
  );
};

export default StarPlusShow;
