import axios from "axios";

export const FETCHING_IMG_START = "FETCHING_IMG_START";
export const FETCHING_IMG_SUCCESS = "FETCHING_IMG_SUCCESS";
export const FETCHING_IMG_FAILURE = "FETCHING_IMG_FAILURE";

export const getIMG = () => (dispatch) => {
  dispatch({ type: FETCHING_IMG_START });

  // implement the code calling actions for .then and .catch
  axios
    .get("https://picsum.photos/200/300")
    .then((res) => {
      console.log(res);

      dispatch({ type: FETCHING_IMG_SUCCESS, payload: res.data.image });
    })
    .catch((err) => {
      console.log(err);

      dispatch({
        type: FETCHING_IMG_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`,
      });
    });
};
