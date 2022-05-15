import React from "react";
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const API = "https://masterway.herokuapp.com";
const initialState = {
  Sunday: "",
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sun: "",
  Mon: "",
  Tue: "",
  Wed: "",
  Thur: "",
  Fri: "",
  Sat: "",
};

const Trips = () => {
  const { worker } = useLocation();

  const [state, setState] = useState(initialState);
  const {
    Sun,
    Mon,
    Tue,
    Wed,
    Thur,
    Fri,
    Sat,
    Saturday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
  } = state;
  const handlesClick = async (e) => {
    e.preventDefault();
    const user = {
      Sun,
      Mon,
      Tue,
      Wed,
      Thur,
      Fri,
      Sat,
      Saturday,
      Sunday,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
    };
    await axios
      .put(`${API}/trips/${worker._id}`, user)
      .then((resp) => {
        toast.success("Shifts added successfully");
        setTimeout(() => {
          window.location.assign(
            "https://vigorous-meninsky-e72496.netlify.app/schedule"
          );
        }, 1500);
      })
      .catch((err) => toast.error("There is a problem"));
  };

  const handlesChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label>Sunday</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Sun"
                  value={Sun || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Sunday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Monday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Mon"
                  value={Mon || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Monday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Tuesday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Tue"
                  value={Tue || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Tuesday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Wednesday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Wed"
                  value={Wed || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Wednesday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Thursday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Thur"
                  value={Thur || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Thursday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Friday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Fri"
                  value={Fri || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Friday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Saturday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Info"
                  name="Sat"
                  value={Sat || ""}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Saturday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option value="OFF">OFF</option>
                  <option value="8:00-16:00">8:00-16:00</option>
                  <option value="16:00-00:00">16:00-00:00</option>
                  <option value="00:00-8:00">00:00-8:00</option>
                  <option value="ALL Day">ALL Day</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Link
                  to={{
                    pathname: "/schedule",
                  }}
                >
                  <Button
                    variant="success"
                    className="btn btn-primary btn-lg"
                    onClick={handlesClick}
                    style={{ marginTop: "10px" }}
                  >
                    {""}Add {worker.fName} Shifts{""}
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </Col>

          <Col md={6}>
            <Table bordered hover style={{ marginTop: "32px" }}>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Requested</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sunday</td>
                  <td>{worker.requesteShift.Sun}</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>{worker.requesteShift.Mon}</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>{worker.requesteShift.Tue}</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>{worker.requesteShift.Wed}</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>{worker.requesteShift.Thur}</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>{worker.requesteShift.Fri}</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>{worker.requesteShift.Sat}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trips;
