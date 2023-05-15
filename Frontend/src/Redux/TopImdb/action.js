import {
  TOP_DATA,
  TOP_ERROR,
  TOP_REQUEST,
  SINGLE_TOP_DATA,
} from "./actionType";
import axios from "axios";

export const topMoviesIMDB = () => async (dispatch) => {
  dispatch({ type: TOP_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/MoviesNotToMiss`);
    dispatch({ type: TOP_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: TOP_ERROR });
  }
};

export const SingletopMoviesIMDB = (id) => async (dispatch) => {
  dispatch({ type: TOP_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/MoviesNotToMiss/${id}`);
    dispatch({ type: SINGLE_TOP_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: TOP_ERROR });
  }
};
