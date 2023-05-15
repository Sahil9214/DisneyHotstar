import {
  COMEDY_DATA,
  COMEDY_ERROR,
  COMEDY_REQUEST,
  SINGLE_COMEDY_DATA,
} from "./actionType";

let initialState = {
  isLoading: false,
  comedy: [],
  isError: false,
  single: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMEDY_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case COMEDY_DATA: {
      return {
        ...state,
        comedy: payload,
        isLoading: false,
      };
    }

    case COMEDY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SINGLE_COMEDY_DATA:{
        return {
            ...state,
            singla:payload
        }
    }

    default: {
      return state;
    }
  }
};
