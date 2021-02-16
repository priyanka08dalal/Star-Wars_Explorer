import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  people: [],
  error: "",
};

const peopleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        people: action.payload.results,
        error: "",
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        loading: false,
        people: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
