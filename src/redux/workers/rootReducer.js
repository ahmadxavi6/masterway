import { combineReducers } from "redux";
import vehcileReducer from "../vehicles/reducerV";
import userReducer from "./reducer";
import adminReducer from "../admins/reducerA";
import budgetReducer from "../budgets/reducerB";

const rootReducer = combineReducers({
  dataw: userReducer,
  datav: vehcileReducer,
  dataa: adminReducer,
  datab: budgetReducer,
});

export default rootReducer;
