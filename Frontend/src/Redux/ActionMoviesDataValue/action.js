import {
  ACTION_DATA,
  ACTION_ERROR,
  ACTION_REQUEST,
  SINGLE_ACTION_DATA,
  STAR_BHARAT_REQUEST,
  STAR_BHARAT_DATA,
  STAR_BHARAT_ERROR,
  SINGLE_STAR_BHARAT_DATA,
} from "./actionType";

import axios from "axios";
export const actionMoviesData = () => async (dispatch) => {
  dispatch({ type: ACTION_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/ActionMovies`);

    dispatch({ type: ACTION_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: ACTION_ERROR });
  }
};

export const SingleActionMoviesData = (id) => async (dispatch) => {
  dispatch({ type: ACTION_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/ActionMovies/${id}`);

    dispatch({ type: SINGLE_ACTION_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: ACTION_ERROR });
  }
};


//*StarBharat Data

