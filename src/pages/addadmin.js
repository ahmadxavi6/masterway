import React from "react";
import { Form } from "react-bootstrap";
const addadmin = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card>">
          <h1 className="center">Add Admin</h1>
          <Form className="signup_form">
            <label for="name">Name</label>
            <input type="text" name="name" className="field" required></input>
            <label for="name">Email</label>
            <input type="email" name="email" className="field" required></input>
            <label for="name">Password</label>
            <input
              type="password"
              name="password"
              className="field"
              required
            ></input>
            <p className="error error--hidden"></p>
            <input type="submit" value={"Add admin"} className="btnnn"></input>
          </Form>
        </div>
      </div>
    </>
  );
};

export default addadmin;
