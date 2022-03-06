import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
const API = "https://masterway.herokuapp.com/";

function Passwordreset() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    const id = window.location.pathname;
    e.preventDefault();
    setLoading(true);
    const user = { password };
    if (user.password !== "") {
      // send the username and password to the server
      await axios
        .post(`${API}${id}`, user)
        .then((resp) => {
          toast.success("Password has changed");
          document.getElementById("password1").value = "";
        })
        .catch((err) => console.log("Email not Found in Database"));
      setLoading(false);
    } else {
      toast.error("Please enter password");
      setLoading(false);
    }
  };

  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form
            className="card-body cardbody-color p-lg-5"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <input
                type="password"
                onChange={({ target }) => setPassword(target.value)}
                className="form-control"
                id="password1"
                aria-describedby="emailHelp"
                placeholder="New Password"
              />
            </div>

            <div className="text-center">
              {!loading && (
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Change Password
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Passwordreset;
