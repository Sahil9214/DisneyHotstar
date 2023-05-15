import {
  STAR_BHARAT_REQUEST,
  STAR_BHARAT_DATA,
  STAR_BHARAT_ERROR,
  SINGLE_STAR_BHARAT_DATA,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  starbharat: [],
  singleBharat: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STAR_BHARAT_DATA: {
      return {
        ...state,
        isLoading: false,
        starbharat: payload,
      };
    }
    case STAR_BHARAT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case STAR_BHARAT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SINGLE_STAR_BHARAT_DATA: {
      return {
        ...state,
        singleBharat: payload,
      };
    }
    default: {
      return state;
    }
  }
};
