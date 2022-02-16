import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const API = "http://localhost:5000";

function Passwordreset() {
  const handleSubmit = async (e) => {
    const id = window.location.pathname;
    e.preventDefault();
    const user = { password };
    // send the username and password to the server
    await axios
      .post(`${API}${id}`, user)
      .then((resp) => {
        toast.success("Password has changed");
        document.getElementById("password1").value = "";
      })
      .catch((err) => console.log("Email not Found in Database"));
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
              <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Passwordreset;
