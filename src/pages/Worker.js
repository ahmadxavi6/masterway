import React from "react";
import { useSelector } from "react-redux";
import Spacer from "react-add-space";
import "./Worker.css";
import axios from "axios";
import { toast } from "react-toastify";
const API = "http://192.168.56.1:5000";

const Worker = () => {
  const worker = useSelector((state) => state.dataw.worker);
  const handleChange = (e) => {
    console.log(e.target.files[0]);
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
      })
      .catch((err) => toast.error("There is problem to upload pic"));
  };
  return (
    <>
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
          Gender: <Spacer amount={23} /> male
        </h6>
        <h6>
          Driving License: <Spacer amount={5} /> Bus
        </h6>

        <h6>
          Adress: <Spacer amount={24} /> Beit-hanina
        </h6>
        <h6>
          Vehicle: <Spacer amount={23} /> Nissan
        </h6>
        <h6>
          Age: <Spacer amount={31} /> {worker.age}
        </h6>
      </div>
    </>
  );
};

export default Worker;
