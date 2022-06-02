import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addWorker,
  deleteWorker,
  loadWorkers,
  updateWorker,
  loadProfile,
} from "../redux/workers/actions";
import { Link } from "react-router-dom";
import "./Workers.css";

const initialState = {
  fName: "",
  email: "",
  phoneNumber: "",
  age: "",
  ID: "",
  address: "",
  gender: "",
  licen: "",
};
/// workers page
const Workers = () => {
  const [state, setState] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [workerId, setWorkerId] = useState(null);
  const dispatch = useDispatch();
  const { workers, msg, worker } = useSelector((state) => state.dataw);
  const [x, setWorkers] = useState();

  const { fName, email, phoneNumber, age, ID, address, gender, licen } = state;
  let [search, setSearch] = useState("");
  /// get workers and put them on the table
  useEffect(() => {
    dispatch(loadWorkers());
    const filteredRows = workers.filter((worker) => {
      return (
        worker.fName.toLowerCase().includes(search.toLowerCase()) ||
        worker.email.toLowerCase().includes(search.toLowerCase()) ||
        worker.age.toLowerCase().includes(search.toLowerCase()) ||
        worker.ID.toLowerCase().includes(search.toLowerCase()) ||
        worker.phoneNumber.toLowerCase().includes(search.toLowerCase())
      );
    });
    setWorkers(filteredRows);
  }, [dispatch, search, workers]);

  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
  }, [msg]);

  useEffect(() => {
    if (worker) {
      setState({ ...worker });
    }
  }, [worker]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  ///handle add or update worker
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fName ||
      !email ||
      !phoneNumber ||
      !age ||
      !ID ||
      !address ||
      !gender ||
      !licen
    ) {
      toast.error("Please Fill All Input Fields");
    } else if (!phoneNumber || phoneNumber.length !== 10) {
      toast.error("Please Enter Valid Number");
    } else {
      if (!editMode) {
        dispatch(addWorker(state));
        setState({
          fName: "",
          email: "",
          phoneNumber: "",
          age: "",
          ID: "",
          address: "",
        });
      } else {
        dispatch(updateWorker(state, workerId));
        setState({
          fName: "",
          email: "",
          phoneNumber: "",
          age: "",
          ID: "",
          address: "",
        });
        setEditMode(false);
        setWorkerId(null);
      }
    }
  };
  ///handle detele worker
  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that worker ?")
    ) {
      dispatch(deleteWorker(id));
    }
  };
  /// update worker
  const handleUpdate = (id) => {
    dispatch(loadProfile(id));
    setWorkerId(id);
    setEditMode(true);
  };
  const handleClick = (id) => {
    dispatch(loadProfile(id));
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Workers List </h1>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ID"
                  name="ID"
                  value={ID || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="fName"
                  value={fName || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={address || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={age || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  className="browser-default "
                  name="gender"
                  style={{ position: "stick" }}
                  onChange={handleChange}
                >
                  <option value="None">Select worker gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Driving License </Form.Label>
                <Form.Select
                  className="browser-default "
                  name="licen"
                  style={{ position: "stick" }}
                  onChange={handleChange}
                >
                  <option value="None">
                    Select the type of driver's license
                  </option>
                  <option value="Private car (up to 3,500 kg) (B)">
                    {" "}
                    Private car (up to 3,500 kg) (B)
                  </option>
                  <option value="Light freight (up to 12,000 kg) (C1)">
                    Light freight (up to 12,000 kg) (C1)
                  </option>
                  <option value="Heavy load (over 12,000 kg) (C)">
                    Heavy load (over 12,000 kg) (C)
                  </option>
                  <option value="Bus (D)">Bus (D)</option>
                  <option value="Taxi (D1)">Taxi (D1)</option>
                  <option value=" Public minibus (D2)">
                    Public mini bus (D2)
                  </option>
                  <option value="Private mini bus (D3)">
                    Private mini bus (D3)
                  </option>
                </Form.Select>
              </Form.Group>
              <div className="d-grid gap-2 mt-2">
                <Button type="submit" variant="primary" size="lg">
                  {editMode ? "Update" : "Submit"}
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={8}>
            <div className="ta">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Age</th>
                    <th>
                      Action {""}
                      <input
                        placeholder="search"
                        type="text"
                        onChange={handleSearch}
                      ></input>
                    </th>
                  </tr>
                </thead>

                {x &&
                  x.map((item, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.ID}</td>
                        <td>{item.fName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.age}</td>
                        <td>
                          <ButtonGroup>
                            <Button
                              style={{ marginRight: "5px" }}
                              variant="danger"
                              onClick={() => handleDelete(item._id)}
                            >
                              Delete
                            </Button>
                            <Button
                              variant="success"
                              onClick={() => handleUpdate(item._id)}
                            >
                              Update
                            </Button>
                            <Link
                              to={{
                                pathname: `/workers/profile/${item._id}/`,
                              }}
                            >
                              <Button
                                variant="info"
                                onClick={() => handleClick(item._id)}
                                style={{ marginLeft: "5px" }}
                              >
                                More
                              </Button>
                            </Link>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Workers;
