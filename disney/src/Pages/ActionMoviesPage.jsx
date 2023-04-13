import React from "react";
import { Box } from "@chakra-ui/react";
import  "../Videos/Marvel.mp4"
const ActionMoviesPage = () => {
  return (
    <div>
      <Box>
        <video width="90%" height="300" autoPlay>
          <source src="../Videos/Marvel.mp4" target="marvel/mp4"  />
          Your browser does not support the video tag.
        </video>
      </Box>
      <br/>
      <br/>
      <Box>

      </Box>
    </div>
  );
};

export default ActionMoviesPage;
