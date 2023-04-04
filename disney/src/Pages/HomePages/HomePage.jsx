import React from "react";
import Slider1 from "../../Components/HomePageComponents/Slider1";
import StarPlusShow from "../../Components/HomePageComponents/StarPlusShow";
import TopRatedImdb from "../../Components/HomePageComponents/TopRatedImdb";
import StarBharatShow from "../../Components/HomePageComponents/StarBharatShow";
import ActionMovies from "../../Components/HomePageComponents/ActionMovies";
import MarvelMovies from "../../Components/HomePageComponents/MarvelMovies";
import ComedyMovies from "../../Components/HomePageComponents/ComedyMovies";
import RomanceMovies from "../../Components/HomePageComponents/RomanceMovies";
import BestForKids from "../../Components/HomePageComponents/BestForKIds";
import MoviesNotToMiss from "../../Components/HomePageComponents/MovieNotToMiss";
import CrimeMovieData from "../../Components/HomePageComponents/CrimeMoviesData";


const HomePage = () => {
  return (
    <div style={{ backgroundColor: "rgb(20, 27, 41)" }}>
      <br />
      <Slider1 />
      <br/>
      <StarPlusShow/>
      <br/>
      <TopRatedImdb/>
      <br/>
      <StarBharatShow/>
      <br/>
      <ActionMovies/>
      <br/>
      <MarvelMovies/>
      <br/>
      <ComedyMovies/>
      <br/>
      <RomanceMovies/>
      <br/>
      <BestForKids/>
      <br/>
      <MoviesNotToMiss/>
      <br/>
    <CrimeMovieData/>
    <br/>
   
    </div>
  );
};

export default HomePage;
