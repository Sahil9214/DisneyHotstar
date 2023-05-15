import { SUPER_REQUEST, SUPER_DATA, SUPER_ERROR,SUPER_SINGLE_DATA } from "./actionType";
import axios from "axios";

export const SUPERMoviesData = () => async (dispatch) => {
  dispatch({ type: SUPER_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/SuperHero`);

    dispatch({ type: SUPER_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: SUPER_ERROR });
  }
};
export const SuperSingleMoviesData = (id) => async (dispatch) => {
  dispatch({ type: SUPER_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/SuperHero/${id}`);

    dispatch({ type: SUPER_SINGLE_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: SUPER_ERROR });
  }
};
