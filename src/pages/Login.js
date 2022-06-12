import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import logo from "../components/logo 2.png";
import "./login.css";
import { Spinner } from "react-bootstrap";
import Forgetmypass from "./Forgetmypass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Passwordreset from "./Passwordreset";
import { toast, ToastContainer } from "react-toastify";
const API = "https://masterway.herokuapp.com/";
/// login page
export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setfName(foundUser.fName);
      setToken(foundUser.token);
    }
  }, [setToken]);
  /// empty the inpust after putting wrong pass
  const rest = () => {
    setLoading(false);
    toast.error("Wrong email or Wrong password");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      document.getElementById("email").value === "" ||
      document.getElementById("password").value === ""
    ) {
      toast.error("Please Fill Login Info");
      return;
    }
    setLoading(true);
    const user = { fName, email, password };
    // send the username and password to the server
    await axios
      .post(`${API}/login`, user)
      .then((resp) => {
        setUser(resp.data);
        setfName(resp.data.fName);
        setToken(resp.data.token);

        // store the user in localStorage
        sessionStorage.setItem("user", JSON.stringify(resp.data));
        sessionStorage.setItem("picture", resp.data.profilepic);
        sessionStorage.setItem("name", resp.data.fName);
      })
      .catch((err) => rest());
  };

  // if there's a user show the message below
  if (user) {
  }

  return (
    <>
      <div>
        <ToastContainer />
        <Router>
          <Switch>
            <Route path="/forgetmypass" component={Forgetmypass}></Route>
            <Route path="/resetpassword" component={Passwordreset}></Route>
          </Switch>
        </Router>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#3700b3" }}
              >
                <div className="text-center">
                  <img
                    src={logo}
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </div>
                <div className="text-center">
                  {!loading && (
                    <button
                      type="submit"
                      className="btn btn-color px-5 mb-5 w-100"
                    >
                      Login
                    </button>
                  )}
                  {loading && (
                    <button
                      type="submit"
                      className="btn btn-color px-5 mb-5 w-100"
                      disabled
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </button>
                  )}
                </div>

                <a href="/forgetmypass" className="text-dark fw-bold">
                  {" "}
                  <div style={{ color: "white" }}>Forget Password?</div>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
