import { ACTION_DATA, ACTION_ERROR, ACTION_REQUEST } from "./actionType";
import axios from "axios";
export const actionMoviesData = () => async (dispatch) => {
  dispatch({ type: ACTION_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/ActionMovies`);
    dispatch({ type: ACTION_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({type:ACTION_ERROR})
  }
};
