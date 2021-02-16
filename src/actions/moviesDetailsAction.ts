import axios from "axios";
import {
  FETCH_MOVIESDETAILS_REQUEST,
  FETCH_MOVIESDETAILS_SUCCESS,
  FETCH_MOVIESDETAILS_FAILURE,
} from "./actionType";

export const fetchMoviesDetails = () => {
  return (dispatch: any) => {
    dispatch(fetchMoviesDetailsRequest());
    axios

      .get("https://swapi.dev/api/films/1") //Use axios to get data from api
      .then((response) => {
        // response.data is the movie details
        const MoviesDetails = response.data;
        dispatch(fetchMoviesDetailssSuccess(MoviesDetails));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMoviesDetailsFailure(error.message));
      });
  };
};

export const fetchMoviesDetailsRequest = () => {
  return {
    type: FETCH_MOVIESDETAILS_REQUEST,
  };
};

export const fetchMoviesDetailssSuccess = (MoviesDetails: any) => {
  return {
    type: FETCH_MOVIESDETAILS_SUCCESS,
    payload: MoviesDetails,
  };
};

export const fetchMoviesDetailsFailure = (error: any) => {
  return {
    type: FETCH_MOVIESDETAILS_FAILURE,
    payload: error,
  };
};
