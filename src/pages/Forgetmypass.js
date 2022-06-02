import React from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
const API = "https://masterway.herokuapp.com/";
/// forget password page
function Forgetmypass() {
  const [loading, setLoading] = useState(false);
  /// send reset paswword email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { email };
    await axios
      .patch(`${API}/forgetmypass`, user)
      .then((resp) => {
        toast.success("Reset Password Email sent");
        document.getElementById("email1").value = "";
      })
      .catch((err) => toast.error("Email not Found in Database"));
    setLoading(false);
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
              {!loading && (
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Send My Password to Email
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

export default Forgetmypass;
