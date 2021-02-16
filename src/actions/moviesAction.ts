import axios from "axios";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./actionType";

//fetch function to get details from api
export const fetchMovies = () => {
  return (dispatch: any) => {
    dispatch(fetchMoviesRequest());
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        // response.data is the users
        const Movies = response.data;
        dispatch(fetchMoviessSuccess(Movies));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviessSuccess = (Movies: any) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: Movies,
  };
};

export const fetchMoviesFailure = (error: any) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};
