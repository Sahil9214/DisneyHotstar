import {
  COMEDY_DATA,
  COMEDY_ERROR,
  COMEDY_REQUEST,
  SINGLE_COMEDY_DATA,
} from "./actionType";
import axios from "axios";

export const comedyMovie = () => async (dispatch) => {
  dispatch({ type: COMEDY_REQUEST });
  try {
    let res = await axios(`http://localhost:8080/LatestTrending`);
    dispatch({ type: COMEDY_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: COMEDY_ERROR });
  }
};

export const SingleComedyData = (id) => async (dispatch) => {
  dispatch({ type: COMEDY_REQUEST });
  try {
    let res = await axios(`http://localhost:8080/LatestTrending/${id}`);
    dispatch({ type: SINGLE_COMEDY_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: COMEDY_ERROR });
  }
};
