import React from "react";

import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API = "https://masterway.herokuapp.com";
const initialStateV = {
  to: "",
  price: "",
  description: "",
  from: "",
  problem: "",
};
function FixUpdate() {
  const location = useLocation();
  const pathname = window.location.pathname;
  const use = pathname.slice(11, -1);
  const [state, setState] = useState(initialStateV);
  const user = {
    to: "",
    price: "",
    description: "",
    from: "",
    problem: "",
  };
  const { price, to } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  console.log(location.fix);
  const handleClick = async () => {
    user.description = location.fix.description;
    user.from = location.fix.from;
    user.problem = location.fix.problem;
    user.price = price;
    user.to = to;
    await axios
      .patch(`${API}/fixupdate/${use}`, user)
      .then((resp) => {
        toast.success("Problem Closed successfully");
        setTimeout(() => {
          window.location.assign(
            `https://vigorous-meninsky-e72496.netlify.app/fix/${use}/`
          );
        }, 1500);
      })
      .catch((err) => toast.error("There is a problem"));
  };

  return (
    <>
      {" "}
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label>
                  <h5>Problem : {location.fix.problem}</h5>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5>From : {location.fix.from}</h5>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5>Description : {location.fix.description}</h5>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5>Fixed date</h5>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="To"
                  name="to"
                  value={to || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5>Price</h5>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="From"
                  name="price"
                  value={price || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Button
                  variant="success"
                  className="btn btn-primary btn-lg"
                  style={{ marginTop: "10px" }}
                  onClick={handleClick}
                >
                  {""}Update Status{""}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FixUpdate;
