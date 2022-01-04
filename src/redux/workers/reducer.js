import * as types from "./actionTypes";

const initialState = {
  workers: [],
  worker: {},
  msg: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WORKERS:
      return {
        ...state,
        workers: action.payload,
      };
    case types.ADD_WORKER:
    case types.DELETE_WORKER:
    case types.UPDATE_WORKER:
      return {
        ...state,
        msg: action.payload,
      };
    case types.GET_SINGLE_WORKER:
      return {
        ...state,
        worker: action.payload,
      };

    case types.LOAD_PROFILE:
      return{
        ...state, 
        worker:action.payload

      }
    default:
      return state;
  }
};

export default userReducer;
