import React, { useEffect, useState } from "react";
import Spacer from "react-add-space";
import { Container, Col, Row } from "react-bootstrap";
import "./Worker.css";
import axios from "axios";
import { toast } from "react-toastify";
const API = "https://masterway.herokuapp.com/";
/// admin page that shows info and other stuff
const Admin = () => {
  const initialState = {
    profilepic: "",
    email: "",
    fName: "",
    phoneNumber: "",
    age: "",
  };
  const pathname = window.location.pathname;
  const use = pathname.slice(0, -1);
  const [admin, setAdmin] = useState(initialState);
  /// get the admin info from the database
  useEffect(() => {
    async function getProfile() {
      await axios
        .get(`${API}${use}`)
        .then((resp) => {
          setAdmin(resp.data);
        })
        .catch((err) => toast.error("There is a problem"));
    }
    getProfile();
  }, [use]);
  /// upload image of the admin to database
  const handleChange = (e) => {
    const fd = new FormData();
    fd.append("profilepic", e.target.files[0], e.target.files[0].name);
    axios
      .post(`${API}/admins/profilepic/${admin._id}`, fd, {
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
  return (
    <>
      <Container>
        <Row>
          <h1 style={{ textAlign: "center", marginTop: "10px" }}>
            Admin Profile
          </h1>
          <Col>
            <div className="container-picture">
              <div className="picture">
                <img
                  src={"data:image/gif;base64," + admin.profilepic}
                  id="profile"
                  width="300"
                  height="300"
                  border=" 5px solid rgb(255, 1, 1)"
                  style={{ borderRadius: 40 }}
                  alt=""
                ></img>
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
            </div>
          </Col>
          <Col>
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
                Age: <Spacer amount={31} /> {admin.age}
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
