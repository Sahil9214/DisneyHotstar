import {
  SUPER_REQUEST,
  SUPER_DATA,
  SUPER_ERROR,
  SUPER_SINGLE_DATA,
} from "./actionType";
const initialState = {
  isLoading: false,
  isError: false,
  super: [],
  singleSuper: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUPER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SUPER_DATA: {
      return {
        ...state,
        isLoading: false,
        super: payload,
      };
    }
    case SUPER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SUPER_SINGLE_DATA: {
      return {
        ...state,
        isLoading: false,
        singleSuper: payload,
      };
    }
    default: {
      return state;
    }
  }
};
