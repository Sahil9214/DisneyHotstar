import {
  STARPLUS_DATA,
  STARPLUS_ERROR,
  STARPLUS_REQUEST,
  STARPLUS_SINGLE_DATA,
} from "./actionType";

import axios from "axios";




export const StarPlusDataAction = () => async (dispatch) => {
  dispatch({ type: STARPLUS_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/StarPlusShow`);

    dispatch({ type: STARPLUS_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: STARPLUS_ERROR });
  }
};

export const SingleSTARPLUSMoviesData = (id) => async (dispatch) => {
  dispatch({ type: STARPLUS_REQUEST });
  try {
    let res = await axios.get(` http://localhost:8080/StarPlusShow/${id}`);
    console.log("single", res.data);
    dispatch({ type: STARPLUS_SINGLE_DATA, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: STARPLUS_ERROR });
  }
};
