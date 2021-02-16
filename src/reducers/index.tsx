import { combineReducers } from "redux";

import peopleReducer from "./peopleReducer";
import moviesReducer from "./moviesReducer";
import moviesDetailsReducer from "./moviesDetailsReducer";
import personDetailsReducer from "./personDetailsReducer";
import planetsReducer from "./planetReducer";
import planetsDetailsReducer from "./planetDetailsReducer";

const rootReducer = combineReducers({
  peopleReducer: peopleReducer,
  moviesReducer: moviesReducer,
  moviesDetailsReducer: moviesDetailsReducer,
  personDetailsReducer: personDetailsReducer,
  planetsReducer: planetsReducer,
  planetsDetailsReducer: planetsDetailsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
