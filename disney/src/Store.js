import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as Movienottomiss} from "./Redux/Sliders/reducer"


const rootReducer=combineReducers({
Movienottomiss
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))