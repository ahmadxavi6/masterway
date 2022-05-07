import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import "./Workers.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addVehicle,
  deleteVehicle,
  loadSingleVehicle,
  loadVehicles,
  updateVehicle,
} from "../redux/vehicles/actionsV";
import * as ImIcons from "react-icons/im";

const initialStateV = {
  man: "",
  model: "",
  year: "",
  lice: "",
  insu: "",
};

const Vehicles = () => {
  const [state, setState] = useState(initialStateV);
  const [editMode, setEditMode] = useState(false);
  const [vehicleId, setVehicalId] = useState(null);
  const dispatch = useDispatch();
  const { vehicles, msg, vehicle } = useSelector((state) => state.datav);
  const [x, setWorkers] = useState();

  const { man, model, year, lice, insu } = state;
  let [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(loadVehicles());
    const filteredRows = vehicles.filter((vehicle) => {
      return (
        vehicle.man.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.year.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.lice.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.insu.toLowerCase().includes(search.toLowerCase())
      );
    });
    setWorkers(filteredRows);
  }, [dispatch, vehicles, search]);
  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
  }, [msg]);

  useEffect(() => {
    if (vehicle) {
      setState({ ...vehicle });
    }
  }, [vehicle]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!man || !model || !year || !lice || !insu) {
      toast.error("Please fill all input field");
    } else {
      if (!editMode) {
        dispatch(addVehicle(state));
        setState({ man: "", model: "", year: "", lice: "", insu: "" });
      } else {
        dispatch(updateVehicle(state, vehicleId));
        setState({ man: "", model: "", year: "", lice: "", insu: "" });
        setEditMode(false);
        setVehicalId(null);
      }
    }
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that vehicle ?")
    ) {
      dispatch(deleteVehicle(id));
    }
  };

  const handleUpdate = (id) => {
    dispatch(loadSingleVehicle(id));
    setVehicalId(id);
    setEditMode(true);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const getIcon = (e) => {
    if (e === "1") {
      return <ImIcons.ImCheckmark />;
    } else return <ImIcons.ImCross />;
  };
  const handleClick = (id) => {
    dispatch(loadSingleVehicle(id));
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Vehicles List</h1>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Manufacturer"
                  name="man"
                  value={man || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Model"
                  name="model"
                  value={model || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Year"
                  name="year"
                  value={year || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>License</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="License"
                  name="lice"
                  value={lice || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Insurance</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Year"
                  name="insu"
                  value={insu || ""}
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
            <div className="ta">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>License</th>
                    <th>Insurance</th>
                    <th>Status</th>
                    <th>
                      Action {"    "}
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
                        <td>{item.man}</td>
                        <td>{item.model}</td>
                        <td>{item.year}</td>
                        <td>{item.lice}</td>
                        <td>{item.insu}</td>
                        <td>{getIcon(item.status)}</td>
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
                                pathname: `/vehicles/${item._id}/`,
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

export default Vehicles;
