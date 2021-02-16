import axios from "axios";
import {
  FETCH_PLANETDETAILS_REQUEST,
  FETCH_PLANETDETAILS_SUCCESS,
  FETCH_PLANETDETAILS_FAILURE,
} from "./actionType";

export const fetchPlanetDetails = () => {
  return (dispatch: any) => {
    dispatch(fetchPlanetsDetailsRequest());
    axios

      .get("https://swapi.dev/api/planets/1") // Use axios to get data from API
      .then((response) => {
        // response.data is the users
        const PlanetsDetails = response.data;
        dispatch(fetchPlanetDetailssSuccess(PlanetsDetails));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPlanetsDetailsFailure(error.message));
      });
  };
};

export const fetchPlanetsDetailsRequest = () => {
  return {
    type: FETCH_PLANETDETAILS_REQUEST,
  };
};

export const fetchPlanetDetailssSuccess = (MoviesDetails: any) => {
  return {
    type: FETCH_PLANETDETAILS_SUCCESS,
    payload: MoviesDetails,
  };
};

export const fetchPlanetsDetailsFailure = (error: any) => {
  return {
    type: FETCH_PLANETDETAILS_FAILURE,
    payload: error,
  };
};
