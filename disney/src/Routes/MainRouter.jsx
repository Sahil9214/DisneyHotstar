import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePages/HomePage";

import MoviesNotToMiss from "../Components/HomePageComponents/MovieNotToMiss";
import CrimeMovies from "../Pages/CrimeMovies";
import StarPlusShows from "../Pages/StarPlusShows";
import Drama from "../Pages/Drama";
import LatestTrending from "../Pages/LatestTrending";
import RomanceMoviesPage from "../Pages/RomanceMoviesPage";
import KidsPage from "../Pages/KidsPage";
import SuperHero from "../Pages/SuperHero";
import ActionMoviesPage from "../Pages/ActionMoviesPage";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/action" element={<ActionMoviesPage />} />
      <Route path="/movienotmiss" element={<MoviesNotToMiss />} />
      <Route path="/crimemovies" element={<CrimeMovies />} />
      <Route path="/starplusshow" element={<StarPlusShows />} />
      <Route path="/drama" element={<Drama />} />
      <Route path="/latest" element={<LatestTrending />} />
      <Route path="/romancemovies" element={<RomanceMoviesPage />} />
      <Route path="/kidsPage" element={<KidsPage />} />
      <Route path="/superhero" element={<SuperHero />} />
    
    </Routes>
  );
};

export default MainRouter;
//!// marvel videohttps://user-images.githubusercontent.com/106021674/230892741-082bfa72-0222-48e0-8fe0-b17479ee5fad.mp4
