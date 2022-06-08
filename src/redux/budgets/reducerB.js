import * as types from "./actionTypesB";

const initialStateB = {
  budgets: [],
  budget: {},
  msg: "",
};

const budgetReducer = (state = initialStateB, action) => {
  switch (action.type) {
    case types.GET_BUDGETS:
      return {
        ...state,
        budgets: action.payloadB,
      };
    case types.ADD_BUDGET:
    case types.DELETE_BUDGET:
    case types.UPDATE_BUDGET:
      return {
        ...state,
        msg: action.payloadB,
      };
    case types.GET_SINGLE_BUDGET:
      return {
        ...state,
        budget: action.payloadB,
      };
    default:
      return state;
  }
};

export default budgetReducer;
