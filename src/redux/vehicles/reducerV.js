import * as types from "./actionTypesV";

const initialStateV = {
  vehicles: [],
  vehicle: {},
  msg: "",
};

const vehcileReducer = (state = initialStateV, action) => {
  switch (action.type) {
    case types.GET_VEHICLES:
      return {
        ...state,
        vehicles: action.payloadV,
      };
    case types.ADD_VEHICLE:
    case types.DELETE_VEHICLE:
    case types.UPDATE_VEHICLE:
      return {
        ...state,
        msg: action.payloadV,
      };
    case types.GET_SINGLE_VEHICLE:
      return {
        ...state,
        vehicle: action.payloadV,
      };
    default:
      return state;
  }
};

export default vehcileReducer;
