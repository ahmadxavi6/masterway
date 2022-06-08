import * as types from "./actionTypesB";
import axios from "axios";

const API = "https://masterway.herokuapp.com";
/// Budget fucntions
const getBudgets = (budgets) => ({
  type: types.GET_BUDGETS,
  payloadB: budgets,
});

const getBudget = (budgets) => ({
  type: types.GET_SINGLE_BUDGET,
  payloadB: budgets,
});

const budgetAdded = (msg) => ({
  type: types.ADD_BUDGET,
  payloadB: msg,
});

const budgetDelete = (msg) => ({
  type: types.DELETE_BUDGET,
  payloadB: msg,
});

const budgetUpdate = (msg) => ({
  type: types.UPDATE_BUDGET,
  payloadB: msg,
});
/// get all Budget
export const loadBudgets = () => {
  return function (dispatch) {
    axios
      .get(`${API}/budget`)
      .then((resp) => dispatch(getBudgets(resp.data)))
      .catch((err) => console.log(err));
  };
};
///add budget
export const addBudget = (budget) => {
  return function (dispatch) {
    axios
      .post(`${API}/budget`, budget)
      .then((resp) => {
        dispatch(budgetAdded(resp.data.msg));
        dispatch(loadBudgets());
      })
      .catch((err) => console.log(err));
  };
};
/// delete budget
export const deleteBudget = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API}/budget/${id}`)
      .then((resp) => {
        dispatch(budgetDelete(resp.data.msg));
        dispatch(loadBudgets());
      })
      .catch((err) => console.log(err));
  };
};
//// get budget
export const loadSingleBudget = (id) => {
  return function (dispatch) {
    axios
      .get(`${API}/budget/${id}`)
      .then((resp) => {
        dispatch(getBudget(resp.data));
      })
      .catch((err) => console.log(err));
  };
};
/// update budget
export const updateBudget = (budget, id) => {
  return function (dispatch) {
    axios
      .put(`${API}/budget/${id}`, budget)
      .then((resp) => {
        dispatch(budgetUpdate(resp.data.msg));
        dispatch(loadBudgets());
      })
      .catch((err) => console.log(err));
  };
};
