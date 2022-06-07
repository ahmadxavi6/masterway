import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spacer from "react-add-space";
import { Container, Col, Row } from "react-bootstrap";
import "./Worker.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
const API = "https://masterway.herokuapp.com";
/// vehcile page the contain picture and info fo the car and more stuff
const Vehcile = () => {
  const initialState = {
    man: "",
    type: "",
    model: "",
    lice: "",
    insu: "",
  };
  const pathname = window.location.pathname;
  const use = pathname.slice(0, -1);
  const [vehcile, setVehcile] = useState(initialState);
  /// get the vehilce info
  useEffect(() => {
    async function getProfile() {
      await axios
        .get(`${API}${use}`)
        .then((resp) => {
          setVehcile(resp.data);
        })
        .catch((err) => console.log(err));
      await axios
        .get(`${API}${use}`)
        .then((resp) => {})
        .catch((err) => toast.error("There is a problem"));
    }
    getProfile();
  }, [use]);
  /// upload vehicle picture
  const handleChange = (e) => {
    console.log(e.target.files[0]);
    const fd = new FormData();
    fd.append("pic", e.target.files[0], e.target.files[0].name);
    axios
      .post(`${API}/vehicle/pic/${vehcile._id}`, fd, {
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
            Vehcile Profile
          </h1>
          <Col>
            <div className="container-picture">
              <div className="picture">
                <img
                  src={"data:image/gif;base64," + vehcile.pic}
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
                  Choose vehcile picture
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
                Manufacturer: <Spacer amount={11} />
                {vehcile.man}
              </h6>
              <h6>
                Model: <Spacer amount={27} /> {vehcile.model}
              </h6>
              <h6>
                Year: <Spacer amount={31} /> {vehcile.year}
              </h6>
              <h6>
                License: <Spacer amount={24} /> {vehcile.lice}
              </h6>
              <h6>
                Insurance: <Spacer amount={19} /> {vehcile.insu}
              </h6>
              <Link
                to={{
                  pathname: `/fix/${vehcile._id}/`,
                }}
              >
                <Button variant="info" style={{ marginLeft: "5px" }}>
                  Fix History
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vehcile;
