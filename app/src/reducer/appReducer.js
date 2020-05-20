const initialState = {
  joke: "",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOKE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_JOKE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        joke: action.payload,
      };
    case "FETCH_JOKE_ERROR":
      return {
        ...state,
        joke: "",
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
