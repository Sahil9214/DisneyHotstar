import React from "react";
import Slider1 from "../../Components/HomePageComponents/Slider1";
import StarPlusShow from "../../Components/HomePageComponents/StarPlusShow";
import TopRatedImdb from "../../Components/HomePageComponents/TopRatedImdb";
const HomePage = () => {
  return (
    <div style={{ backgroundColor: "rgb(20, 27, 41)" }}>
      <br />
      <Slider1 />
      <br/>
      <StarPlusShow/>
      <br/>
      <TopRatedImdb/>
    </div>
  );
};

export default HomePage;
