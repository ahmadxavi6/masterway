import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import profile from "../components/profile.png";
import Spacer from "react-add-space";
import "./Worker.css";

const Admin = () => {
  const admin = useSelector((state) => state.dataa.admin);
  return (
    <>
      <div className="container-picture">
        <img src={profile} className="rounded" alt="Pic"></img>
      </div>
      <div className="change-bu">
        <Button
          style={{ marginLeft: "360px", marginTop: "25px" }}
          variant="info"
        >
          Change Profile Pitcure
        </Button>
      </div>

      <div className="infoo" style={{ marginTop: "35px" }} elevation={2}>
        <h4>Basic information</h4>
        <h6>
          Name: <Spacer amount={28} />
          {admin.fName}
        </h6>
        <h6>
          Email: <Spacer amount={28} /> {admin.email}
        </h6>
        <h6>
          Phone Number: <Spacer amount={6} /> {admin.phoneNumber}
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
          Age: <Spacer amount={31} /> {admin.age}
        </h6>
      </div>
    </>
  );
};

export default Admin;
