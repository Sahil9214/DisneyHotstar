import {
  TOP_DATA,
  TOP_ERROR,
  TOP_REQUEST,
  SINGLE_TOP_DATA,
} from "./actionType";

let initialState = {
  isLoading: false,
  data: [],
  isError: false,
  single: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TOP_DATA: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case TOP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SINGLE_TOP_DATA: {
      return {
        ...state,
        single: payload,
      };
    }
    default: {
      return state;
    }
  }
};
