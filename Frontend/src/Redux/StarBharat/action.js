import {
  STAR_BHARAT_REQUEST,
  STAR_BHARAT_DATA,
  STAR_BHARAT_ERROR,
} from "./actionType.js";
import axios from "axios";

export const SuperbharatData = () => async (dispatch) => {
  dispatch({ type: STAR_BHARAT_REQUEST });
  try {
    let res = await axios.get("http://localhost:8080/Drama");

    dispatch({ type: STAR_BHARAT_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: STAR_BHARAT_ERROR });
  }
};

export const SingleSuperbharatData = (id) => async (dispatch) => {
  dispatch({ type: STAR_BHARAT_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/Drama/${id}`);

    dispatch({ type: STAR_BHARAT_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: STAR_BHARAT_ERROR });
  }
};
