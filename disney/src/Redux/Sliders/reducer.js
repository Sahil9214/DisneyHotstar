import { SLIDER_REQUEST, SLIDER_FAILURE, SLIDER_SUCCESS, CRIME_MOVIES } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  MoviesNotToMissData: [],
  crime:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SLIDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SLIDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        MoviesNotToMissData: payload,
      };
    }
    case SLIDER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case CRIME_MOVIES:{
        return{
            ...state,
            isLoading:false,
            crime:payload
        }
    }
    default: {
      return state;
    }
  }
};
