import {
  STARPLUS_DATA,
  STARPLUS_ERROR,
  STARPLUS_REQUEST,
  STARPLUS_SINGLE_DATA,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  starData: [],
  starSingle: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STARPLUS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case STARPLUS_DATA: {
      return {
        ...state,
        isLoading: false,

        starData: payload,
      };
    }
    case STARPLUS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case STARPLUS_SINGLE_DATA: {
      return {
        ...state,
        isLoading: false,
        starSingle: payload,
      };
    }

    default: {
      return state;
    }
  }
};
