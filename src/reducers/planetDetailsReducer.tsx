import {
  FETCH_PLANETDETAILS_REQUEST,
  FETCH_PLANETDETAILS_SUCCESS,
  FETCH_PLANETDETAILS_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  planetDetails: [],
  error: "",
};

const planetsDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PLANETDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        planetDetails: null,
      };
    case FETCH_PLANETDETAILS_SUCCESS:
      return {
        loading: false,
        planetDetails: action.payload,
        error: "",
      };
    case FETCH_PLANETDETAILS_FAILURE:
      return {
        loading: false,
        planetDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planetsDetailsReducer;
