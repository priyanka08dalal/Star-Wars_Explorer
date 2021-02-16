import {
  FETCH_PERSONDETAILS_REQUEST,
  FETCH_PERSONDETAILS_SUCCESS,
  FETCH_PERSONDETAILS_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  personDetails: [],
  error: "",
};

const personDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PERSONDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        personDetails: null,
      };
    case FETCH_PERSONDETAILS_SUCCESS:
      return {
        loading: false,
        personDetails: action.payload,
        error: "",
      };
    case FETCH_PERSONDETAILS_FAILURE:
      return {
        loading: false,
        personDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default personDetailsReducer;
