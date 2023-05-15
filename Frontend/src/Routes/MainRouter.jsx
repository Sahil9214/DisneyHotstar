import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePages/HomePage";
import Login from "../Pages/Login";
import CrimeMovies from "../Pages/CrimeMovies";
import StarPlusShows from "../Pages/StarPlusShows";
import Drama from "../Pages/Drama";
import LatestTrending from "../Pages/LatestTrending";
import RomanceMoviesPage from "../Pages/RomanceMoviesPage";
import KidsPage from "../Pages/KidsPage";
import SuperHero from "../Pages/SuperHero";
import ActionMoviesPage from "../Pages/ActionMoviesPage";
import SinglePage from "../Pages/SinglePage";
import ActionSingle from "../Pages/ActionSingle.jsx";
import SingleStarPlus from "../Pages/SingleStarplus.jsx";
import SignUp from "../Pages/SignUp.jsx";
import StarBharat from "../Pages/StarBharat";
import SingleStarBharat from "../Pages/SingleStarBharat";
import ComedyPage from "../Pages/ComedyPage";
import SingleBhool from "../Pages/SingleBhool";
import SingleTopMiss from "../Pages/SingleTopMiss";
import TopMiss from "../Pages/TopMiss";
import Plan from "../Pages/Plan";
import CheckoutPage from "../Pages/CheckoutPage";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/action" element={<ActionMoviesPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/crimemovies" element={<CrimeMovies />} />
      <Route path="/starplusshow" element={<StarPlusShows />} />
      <Route path="/drama" element={<Drama />} />
      <Route path="/latest" element={<LatestTrending />} />
      <Route path="/romancemovies" element={<RomanceMoviesPage />} />
      <Route path="/kidsPage" element={<KidsPage />} />
      <Route path="/superhero" element={<SuperHero />} />
      <Route path="/superhero/:id" element={<SinglePage />} />
      <Route path="/action/:id" element={<ActionSingle />} />
      <Route path="/starplusshow/:id" element={<SingleStarPlus />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/starbharat" element={<StarBharat />} />
      <Route path="/starbharat/:id" element={<SingleStarBharat />} />
      <Route path="/comedy" element={<ComedyPage />} />
      <Route path="/comedy/:id" element={<SingleBhool />} />
      <Route path="/top" element={<TopMiss />} />
      <Route path="/top/:id" element={<SingleTopMiss />} />
      <Route path="/plan" element={<Plan />} />
      <Route path='/check' element={<CheckoutPage/>} />
    </Routes>
  );
};

export default MainRouter;
