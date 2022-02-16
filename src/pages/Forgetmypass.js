import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const API = "http://localhost:5000";

function Forgetmypass() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email };
    await axios
      .patch(`${API}/forgetmypass`, user)
      .then((resp) => {
        toast.success("Reset Password Email sent");
        document.getElementById("email1").value = "";
      })
      .catch((err) => toast.error("Email not Found in Database"));
  };

  const [email, setEmail] = useState("");
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
                type="email"
                onChange={({ target }) => setEmail(target.value)}
                className="form-control"
                id="email1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                Send My Password to Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgetmypass;
