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
  loadSingleWorker,
  loadWorkers,
  updateWorker,
  loadProfile,
} from "../redux/workers/actions";
import { Link } from "react-router-dom";

const initialState = {
  fName: "",
  email: "",
  phoneNumber: "",
  age: "",
};
const Workers = () => {
  const [state, setState] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [workerId, setWorkerId] = useState(null);
  const dispatch = useDispatch();
  const { workers, msg, worker } = useSelector((state) => state.dataw);

  const { fName, email, phoneNumber, age } = state;

  useEffect(() => {
    dispatch(loadWorkers());
  }, [dispatch]);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fName || !email || !phoneNumber || !age) {
      toast.error("Please Fill All Input Fields");
    }
    if (phoneNumber.length !== 10) {
      toast.error("Please Enter Valid Number");
    } else {
      if (!editMode) {
        dispatch(addWorker(state));
        setState({ fName: "", email: "", phoneNumber: "", age: "" });
      } else {
        dispatch(updateWorker(state, workerId));
        setState({ fName: "", email: "", phoneNumber: "", age: "" });
        setEditMode(false);
        setWorkerId(null);
      }
    }
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that worker ?")
    ) {
      dispatch(deleteWorker(id));
    }
  };

  const handleUpdate = (id) => {
    dispatch(loadSingleWorker(id));
    setWorkerId(id);
    setEditMode(true);
  };
  const handleClick = (id) => {
    dispatch(loadProfile(id));
  };
  return (
    <>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
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
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={age || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2 mt-2">
                <Button type="submit" variant="primary" size="lg">
                  {editMode ? "Update" : "Submit"}
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={8}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              {workers &&
                workers.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
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
                              state: item._id,
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Workers;
