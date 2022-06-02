import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spacer from "react-add-space";
import "./Worker.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
const API = "https://masterway.herokuapp.com";
/// worker profile page
const Worker = () => {
  const initialState = {
    profilepic: "",
    email: "",
    fName: "",
    phoneNumber: "",
    age: "",
  };

  const [state, setState] = useState();

  const pathname = window.location.pathname;
  const use = pathname.slice(0, -1);
  const [worker, setWorker] = useState(initialState);
  const [vehicles, setVehicles] = useState([]);
  /// get worker info and profile picture
  useEffect(() => {
    async function getProfile() {
      await axios
        .get(`${API}${use}`)
        .then((resp) => {
          setWorker(resp.data);
        })
        .catch((err) => toast.error("There is a problem"));
    }
    async function getVehicles() {
      axios
        .get(`${API}/vehicles`)
        .then((resp) => {
          setVehicles(resp.data);
        })
        .catch((err) => toast.error("There is a problem"));
    }
    getProfile();
    getVehicles();
  }, [use]);
  /// upload profile picture to the wokrer
  const handleChange = (e) => {
    const fd = new FormData();
    fd.append("profilepic", e.target.files[0], e.target.files[0].name);

    axios
      .post(`${API}/workers/profilepic/${worker._id}`, fd, {
        headers: {
          enctype: "multipart/form-data",
        },
      })
      .then((resp) => {
        toast.success("Profile Picture Changed");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => toast.error("There is problem to upload pic"));
  };
  const handlesChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  /// link vehicle to the worker
  const handleClick = async () => {
    await axios
      .put(`${API}/workervehicle/${worker._id}`, state)
      .then((resp) => {
        setWorker({ ...worker, vehcile: state.vehcile });
        toast.success("Vehicle has been linked successfully");
      })
      .catch((err) => toast.error("There is a problem"));
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Worker Profile</h1>
      <div className="container-picture">
        <div className="picture">
          <img
            src={"data:image/gif;base64," + worker.profilepic}
            id="profile"
            width="270"
            height="270"
            alt=""
          ></img>
        </div>
      </div>
      <div className="change-bu">
        <label
          style={{
            display: "block",

            margin: ".4rem ",
          }}
        >
          Choose a profile picture
        </label>

        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <div className="infoo" style={{ marginTop: "35px" }} elevation={2}>
        <h4>Basic information</h4>
        <h6>
          Name: <Spacer amount={28} />
          {worker.fName}
        </h6>
        <h6>
          Email: <Spacer amount={28} /> {worker.email}
        </h6>
        <h6>
          Phone Number: <Spacer amount={6} /> {worker.phoneNumber}
        </h6>
        <h6>
          Gender: <Spacer amount={23} /> {worker.gender}
        </h6>
        <h6>
          Driving License: <Spacer amount={5} /> {worker.licen}
        </h6>

        <h6>
          Adress: <Spacer amount={25} />
          {worker.address}
        </h6>
        <h6>
          Vehicle: <Spacer amount={24} /> {worker.vehcile}
        </h6>
        <h6>
          Age: <Spacer amount={32} /> {worker.age}
        </h6>
        <Link
          to={{
            pathname: `/workersHours/${worker._id}/`,
          }}
        >
          <Button variant="info" style={{ marginLeft: "5px" }}>
            Worker Hours
          </Button>
        </Link>
        <Link
          to={{
            pathname: `/hoursreport/${worker._id}/`,
          }}
        >
          <Button variant="info" style={{ marginLeft: "5px" }}>
            Salary Reports
          </Button>
        </Link>
      </div>

      <div className="infoo" style={{ marginTop: "35px" }} elevation={2}>
        <h4>Link a vehicle to {worker.fName}</h4>
        <Form.Select
          className="browser-default "
          name="vehcile"
          style={{ position: "stick" }}
          onChange={handlesChange}
        >
          <option>Choose vehilce to link it to {worker.fName}</option>
          {vehicles.map((item) => {
            return (
              <option key={item.index} value={item.index}>
                {item.man} {item.model} {item.year}
              </option>
            );
          })}
        </Form.Select>
        <Button
          variant="success"
          style={{ marginLeft: "170px", marginTop: "5px", marginBottom: "5px" }}
          onClick={handleClick}
        >
          Link Vechile
        </Button>
      </div>
    </>
  );
};

export default Worker;
