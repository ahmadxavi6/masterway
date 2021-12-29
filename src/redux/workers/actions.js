import * as types from "./actionTypes";
import axios from "axios";

const API = "http://localhost:5000";

const getWorkers = (workers) => ({
  type: types.GET_WORKERS,
  payload: workers,
});

const getWorker = (workers) => ({
  type: types.GET_SINGLE_WORKER,
  payload: workers,
});

const workerAdded = (msg) => ({
  type: types.ADD_WORKER,
  payload: msg,
});

const workerDelete = (msg) => ({
  type: types.DELETE_WORKER,
  payload: msg,
});

const workerUpdate = (msg) => ({
  type: types.UPDATE_WORKER,
  payload: msg,
});

export const loadWorkers = () => {
  return function (dispatch) {
    axios
      .get(`${API}/workers`)
      .then((resp) => dispatch(getWorkers(resp.data)))
      .catch((err) => console.log(err));
  };
};


export const addWorker = (worker) => {
  return function (dispatch) {
    axios
      .post(`${API}/workers`, worker)
      .then((resp) => {
        dispatch(workerAdded(resp.data.msg));
        dispatch(loadWorkers());
      })
      .catch((err) => console.log(err));
  };
};


export const deleteWorker = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API}/workers/${id}`)
      .then((resp) => {
        dispatch(workerDelete(resp.data.msg));
        dispatch(loadWorkers());
      })
      .catch((err) => console.log(err));
  };
};

export const loadSingleWorker = (id) => {
  return function (dispatch) {
    axios
      .get(`${API}/workers/${id}`)
      .then((resp) => {
        dispatch(getWorker(resp.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateWorker = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${API}/workers/${id}`, user)
      .then((resp) => {
        dispatch(workerUpdate(resp.data.msg));
        dispatch(loadWorkers());
      })
      .catch((err) => console.log(err));
  };
};
