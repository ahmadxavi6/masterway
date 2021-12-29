import { combineReducers } from "redux";
import vehcileReducer from "../vehicles/reducerV";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  dataw: userReducer,
  datav: vehcileReducer
});

export default rootReducer;
