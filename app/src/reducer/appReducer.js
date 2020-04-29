import {
  FETCHING_IMG_START,
  FETCHING_IMG_SUCCESS,
  FETCHING_IMG_FAILURE,
} from "../actions/AppAction";

const initialState = {
  IMG: null,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_IMG_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_IMG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        IMG: action.payload,
      };
    case FETCHING_IMG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "There was an error.",
      };
    default:
      return state;
  }
};
