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
  addAdmin,
  deleteAdmin,
  loadAdmins,
  updateAdmin,
  loadProfile,
} from "../redux/admins/actionsA";
import { Link } from "react-router-dom";

const initialState = {
  fName: "",
  email: "",
  ID: "",
  phoneNumber: "",
  age: "",
};
const Admins = () => {
  const [state, setState] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [adminId, setAdminId] = useState(null);
  const dispatch = useDispatch();
  const { admins, msg, admin } = useSelector((state) => state.dataa);

  const { fName, email, ID, phoneNumber, age } = state;

  useEffect(() => {
    dispatch(loadAdmins());
  }, [dispatch]);

  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
  }, [msg]);

  useEffect(() => {
    if (admin) {
      setState({ ...admin });
    }
  }, [admin]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fName || !email || !ID || !phoneNumber || !age) {
      toast.error("Please Fill All Input Fields");
    } else {
      if (!editMode) {
        dispatch(addAdmin(state));
        setState({ fName: "", email: "", ID: "", phoneNumber: "", age: "" });
      } else {
        dispatch(updateAdmin(state, adminId));
        setState({ fName: "", email: "", ID: "", phoneNumber: "", age: "" });
        setEditMode(false);
        setAdminId(null);
      }
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you wanted to delete that admin ?")) {
      dispatch(deleteAdmin(id));
    }
  };

  const handleUpdate = (id) => {
    dispatch(loadProfile(id));
    setAdminId(id);
    setEditMode(true);
  };
  const handleClick = (id) => {
    dispatch(loadProfile(id));
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Admins List</h1>
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
                <Form.Label>age</Form.Label>
                <Form.Control
                  type="number"
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              {admins &&
                admins.map((item, index) => (
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
                              pathname: `/admins/profile/${item._id}/`,
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

export default Admins;
