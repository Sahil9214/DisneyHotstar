import axios from "axios";
import { SLIDER_REQUEST, SLIDER_FAILURE, SLIDER_SUCCESS, CRIME_MOVIES } from "./actionType";

export const MoviesData = () => async (dispatch) => {
  dispatch({ type: SLIDER_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/MoviesNotToMiss`);
    dispatch({ type: SLIDER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: SLIDER_FAILURE });
  }
};

export const CrimeMoviesDataAPI = () => async (dispatch) => {
  dispatch({ type: SLIDER_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/CrimeMovies`);
    dispatch({ type: CRIME_MOVIES, payload: res.data });
  } catch (err) {
    dispatch({ type: SLIDER_FAILURE });
  }
};
