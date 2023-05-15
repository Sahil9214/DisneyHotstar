import {
  ACTION_DATA,
  ACTION_ERROR,
  ACTION_REQUEST,
  SINGLE_ACTION_DATA,
 
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  single: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_DATA: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case ACTION_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SINGLE_ACTION_DATA: {
      return {
        ...state,
        isLoading: false,
        single: payload,
      };
    }


    default: {
      return state;
    }
  }
};
