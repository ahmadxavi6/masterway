import { combineReducers } from "redux";
import vehcileReducer from "../vehicles/reducerV";
import userReducer from "./reducer";
import adminReducer from "../admins/reducerA";

const rootReducer = combineReducers({
  dataw: userReducer,
  datav: vehcileReducer,
  dataa: adminReducer,
});

export default rootReducer;
