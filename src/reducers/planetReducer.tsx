import {
  FETCH_PLANET_REQUEST,
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  planet: [],
  error: "",
};

const planetsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PLANET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANET_SUCCESS:
      return {
        loading: false,
        planet: action.payload.results,
        error: "",
      };
    case FETCH_PLANET_FAILURE:
      return {
        loading: false,
        planet: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planetsReducer;
