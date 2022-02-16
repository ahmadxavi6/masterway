import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
const API = "http://localhost:5000";
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
  const worker = useSelector((state) => state.dataw.worker);
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
          window.location.assign("http://localhost:3000/schedule");
        }, 1500);
      })
      .catch((err) => toast.error("There is a proplem"));
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
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
        </Row>
      </Container>
    </>
  );
};

export default Trips;
