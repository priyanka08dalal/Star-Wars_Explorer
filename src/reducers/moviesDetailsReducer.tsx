import {
  FETCH_MOVIESDETAILS_REQUEST,
  FETCH_MOVIESDETAILS_SUCCESS,
  FETCH_MOVIESDETAILS_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  moviesDetails: [],
  error: "",
};

const moviesDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIESDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        moviesDetails: null,
      };
    case FETCH_MOVIESDETAILS_SUCCESS:
      return {
        loading: false,
        moviesDetails: action.payload,
        error: "",
      };
    case FETCH_MOVIESDETAILS_FAILURE:
      return {
        loading: false,
        moviesDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesDetailsReducer;
