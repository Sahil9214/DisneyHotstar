import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as ActionReducer } from "./Redux/ActionMoviesDataValue/reducer";
import { reducer as SuperReducer } from "./Redux/SuperHEro/reducer";
import { reducer as StarReduce } from "./Redux/StarPlus/reducer";
import { reducer as starBharatReducer } from "./Redux/StarBharat/reducer";
import { reducer as ComedyReducer } from "./Redux/Comedy/reducer";
import {reducer as TopReducer} from './Redux/TopImdb/reducer'
const rootReducer = combineReducers({
  ActionReducer,
  SuperReducer,
  StarReduce,
  starBharatReducer,
  ComedyReducer,
  TopReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
