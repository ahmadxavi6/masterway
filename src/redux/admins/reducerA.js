import * as types from "./actionTypesA";

const initialState = {
  admins: [],
  admin: {},
  msg: "",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };
    case types.ADD_ADMIN:
    case types.DELETE_ADMIN:
    case types.UPDATE_ADMIN:
      return {
        ...state,
        msg: action.payload,
      };
    case types.GET_SINGLE_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };

    case types.LOAD_PROFILE:
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
