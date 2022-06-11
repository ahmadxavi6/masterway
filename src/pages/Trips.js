import React from "react";
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const API = "https://masterway.herokuapp.com";

const initialStateT = {
  fName: "",
  weekShifts: {
    Sun: { hours: "", info: "" },
    Mon: { hours: "", info: "" },
    Tue: { hours: "", info: "" },
    Wed: { hours: "", info: "" },
    Thur: { hours: "", info: "" },
    Fri: { hours: "", info: "" },
    Sat: { hours: "", info: "" },
  },
  requesteShift: "",
};
/// add worker shift and the info of the shifts
const Trips = () => {
  const pathname = window.location.pathname;

  const [x, setWorker] = useState(initialStateT);

  const [state, setState] = useState(x.weekShifts);
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
      .put(`${API}/trips/${x._id}`, user)
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
  const use = pathname.slice(7, -1);

  useEffect(() => {
    async function getProfile() {
      await axios
        .get(`${API}/workers/profile/${use}`)
        .then((resp) => {
          setWorker(resp.data);
          setState({
            Sun: resp.data.weekShifts.Sun.info,
            Mon: resp.data.weekShifts.Mon.info,
            Tue: resp.data.weekShifts.Tue.info,
            Wed: resp.data.weekShifts.Wed.info,
            Thur: resp.data.weekShifts.Thur.info,
            Fri: resp.data.weekShifts.Fri.info,
            Sat: resp.data.weekShifts.Sat.info,
            Saturday: resp.data.weekShifts.Sat.hours,
            Sunday: resp.data.weekShifts.Sun.hours,
            Monday: resp.data.weekShifts.Mon.hours,
            Tuesday: resp.data.weekShifts.Tue.hours,
            Wednesday: resp.data.weekShifts.Wed.hours,
            Thursday: resp.data.weekShifts.Thur.hours,
            Friday: resp.data.weekShifts.Fri.hours,
          });
        })
        .catch((err) => toast.error("There is a problem"));
    }

    getProfile();
  }, [use]);

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
                  value={Sun || x.weekShifts.Sun.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Sunday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option defaultValue={x.weekShifts.Sun.hours}>
                    {x.weekShifts.Sun.hours}
                  </option>
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
                  value={Mon || x.weekShifts.Mon.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Monday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option defaultValue={x.weekShifts.Mon.hours}>
                    {x.weekShifts.Mon.hours}
                  </option>
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
                  value={Tue || x.weekShifts.Tue.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Tuesday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option defaultValue={x.weekShifts.Tue.hours}>
                    {x.weekShifts.Tue.hours}
                  </option>
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
                  value={Wed || x.weekShifts.Wed.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Wednesday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  {" "}
                  <option defaultValue={x.weekShifts.Wed.hours}>
                    {x.weekShifts.Wed.hours}
                  </option>
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
                  value={Thur || x.weekShifts.Thur.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Thursday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  {" "}
                  <option defaultValue={x.weekShifts.Thur.hours}>
                    {x.weekShifts.Thur.hours}
                  </option>
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
                  value={Fri || x.weekShifts.Fri.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Friday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  {" "}
                  <option defaultValue={x.weekShifts.Fri.hours}>
                    {x.weekShifts.Fri.hours}
                  </option>
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
                  value={Sat || x.weekShifts.Sat.info}
                  onChange={handlesChange}
                />
                <Form.Select
                  className="browser-default "
                  name="Saturday"
                  style={{ position: "stick" }}
                  onChange={handlesChange}
                >
                  <option defaultValue={x.weekShifts.Sat.hours}>
                    {x.weekShifts.Sat.hours}
                  </option>
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
                    {""}Edit {x.fName} Shifts{""}
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
                  <td>{x.requesteShift.Sun}</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>{x.requesteShift.Mon}</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>{x.requesteShift.Tue}</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>{x.requesteShift.Wed}</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>{x.requesteShift.Thur}</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>{x.requesteShift.Fri}</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>{x.requesteShift.Sat}</td>
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
