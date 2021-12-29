import * as types from "./actionTypesV";
import axios from "axios";

const API = "http://localhost:5000";

const getVehicles = (vehicles) => ({
  type: types.GET_VEHICLES,
  payloadV: vehicles,
});

const getVehicle = (vehicles) => ({
  type: types.GET_SINGLE_VEHICLE,
  payloadV: vehicles,
});

const vehicleAdded = (msg) => ({
  type: types.ADD_VEHICLE,
  payloadV: msg,
});

const vehicleDelete = (msg) => ({
  type: types.DELETE_VEHICLE,
  payloadV: msg,
});

const vehicleUpdate = (msg) => ({
  type: types.UPDATE_VEHICLE,
  payloadV: msg,
});

export const loadVehicles = () => {
  return function (dispatch) {
    axios
      .get(`${API}/vehicles`)
      .then((resp) => dispatch(getVehicles(resp.data)))
      .catch((err) => console.log(err));
  };
};


export const addVehicle = (vehicle) => {
  return function (dispatch) {
    axios
      .post(`${API}/vehicles`, vehicle)
      .then((resp) => {
        dispatch(vehicleAdded(resp.data.msg));
        dispatch(loadVehicles());
      })
      .catch((err) => console.log(err));
  };
};


export const deleteVehicle = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API}/vehicles/${id}`)
      .then((resp) => {
        dispatch(vehicleDelete(resp.data.msg));
        dispatch(loadVehicles());
      })
      .catch((err) => console.log(err));
  };
};

export const loadSingleVehicle = (id) => {
  return function (dispatch) {
    axios
      .get(`${API}/vehicles/${id}`)
      .then((resp) => {
        dispatch(getVehicle(resp.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateVehicle = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${API}/vehicles/${id}`, user)
      .then((resp) => {
        dispatch(vehicleUpdate(resp.data.msg));
        dispatch(loadVehicles());
      })
      .catch((err) => console.log(err));
  };
};
