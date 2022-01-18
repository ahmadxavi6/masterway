import React from "react";
import axios from "axios";
import { useState } from "react";
const API = "http://localhost:5000";

function Addadmin() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { ID, fName, email };
    await axios
      .post(`${API}/addadmin`, user)
      .then((resp) => {
        alert("Admin has been added");
        document.getElementById("ID").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("Email").value = "";
      })
      .catch((err) => alert("Email already Found in Database"));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const user1 = { ID, email };
    if (window.confirm("Are you sure that you wanted to delete that admin ?")) {
      await axios
        .post(`${API}/removeadmin`, user1)
        .then((resp) => {
          alert("Admin has been removed");
          document.getElementById("ID1").value = "";
        })
        .catch((err) => alert("ID not found in the database"));
    }
  };

  const [ID, setID] = useState("");
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  type="text"
                  onChange={({ target }) => setID(target.value)}
                  className="form-control"
                  id="ID"
                  aria-describedby="emailHelp"
                  placeholder="ID Number"
                />
                <input
                  type="text"
                  onChange={({ target }) => setFName(target.value)}
                  className="form-control"
                  id="fname"
                  aria-describedby="emailHelp"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  onChange={({ target }) => setEmail(target.value)}
                  className="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Add Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="card-body cardbody-color p-lg-5">
              <div className="mb-3">
                <input
                  type="text"
                  onChange={({ target }) => setID(target.value)}
                  className="form-control"
                  id="ID1"
                  aria-describedby="emailHelp"
                  placeholder="ID Number"
                />
              </div>
              <div className="text-center">
                <button
                  onClick={handleClick}
                  className="btn btn-color px-5 mb-5 w-100"
                >
                  Remove Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addadmin;
