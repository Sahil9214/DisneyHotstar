import { ACTION_DATA, ACTION_ERROR, ACTION_REQUEST } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
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
        data: payload,
      };
    }
    case ACTION_ERROR: {
      return {
        ...state,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
