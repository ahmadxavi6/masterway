import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";
import logo from "../components/logo 2.png";
import "./login.css";
const API = "http://localhost:5000";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setfName(foundUser.fName);
    }
  }, []);
  const rest = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("Wrong email or Wrong passwod");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { fName, email, password };
    // send the username and password to the server
    await axios
      .post(`${API}/admins`, user)
      .then((resp) => {
        setUser(resp.data);
        setfName(resp.data.fName);
        // store the user in localStorage
        sessionStorage.setItem("user", JSON.stringify(resp.data));
        console.log(resp.data);
        const loggedInUser = sessionStorage.getItem("user");
        console.log(loggedInUser);
      })
      .catch((err) => rest());
  };

  // if there's a user show the message below
  if (user) {
    return <App />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit}
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
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
