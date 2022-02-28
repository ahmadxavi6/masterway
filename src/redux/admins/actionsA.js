import * as types from "./actionTypesA";
import axios from "axios";

const API = "http://192.168.56.1:5000";

const getAdmins = (admins) => ({
  type: types.GET_ADMINS,
  payload: admins,
});
const getProfile = (admin) => ({
  type: types.LOAD_PROFILE,
  payload: admin,
});
export const getAdmin = (admin) => ({
  type: types.GET_SINGLE_ADMIN,
  payload: admin,
});

const adminAdded = (msg) => ({
  type: types.ADD_ADMIN,
  payload: msg,
});

const adminDelete = (msg) => ({
  type: types.DELETE_ADMIN,
  payload: msg,
});

const adminUpdate = (msg) => ({
  type: types.UPDATE_ADMIN,
  payload: msg,
});

export const loadAdmins = () => {
  return function (dispatch) {
    axios
      .get(`${API}/admins`)
      .then((resp) => dispatch(getAdmins(resp.data)))
      .catch((err) => console.log(err));
  };
};

export const loadProfile = (id) => {
  return function (dispatch) {
    axios
      .get(`${API}/admins/profile/${id}`)
      .then((resp) => dispatch(getProfile(resp.data)))
      .catch((err) => console.log(err));
  };
};

export const addAdmin = (admin) => {
  return function (dispatch) {
    axios
      .post(`${API}/admins`, admin)
      .then((resp) => {
        dispatch(adminAdded(resp.data.msg));
        dispatch(loadAdmins());
      })
      .catch((err) => console.log(err));
  };
};

export const deleteAdmin = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API}/admins/${id}`)
      .then((resp) => {
        dispatch(adminDelete(resp.data.msg));
        dispatch(loadAdmins());
      })
      .catch((err) => console.log(err));
  };
};

export const loadSingleAdmin = (id) => {
  return function (dispatch) {
    axios
      .get(`${API}/admins/${id}`)
      .then((resp) => {
        dispatch(getAdmins(resp.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateAdmin = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${API}/admins/${id}`, user)
      .then((resp) => {
        dispatch(adminUpdate(resp.data.msg));
        dispatch(loadAdmins());
      })
      .catch((err) => console.log(err));
  };
};