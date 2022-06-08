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
import axios from "axios";
import "./Workers.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import * as ImIcons from "react-icons/im";
const API = "https://masterway.herokuapp.com";
const initialStateV = {
  problem: "",
  from: "",
  description: "",
};
/// page that contains all problem of vehicle
const Fix = () => {
  const { vehicle } = useSelector((state) => state.datav);
  const [state, setState] = useState(initialStateV);
  let ve = {
    problem: "",
    from: "",
    description: "",
  };

  const [fix, setFix] = useState(vehicle.repairs);

  const [va, setVa] = useState();
  let [search, setSearch] = useState("");
  const pathname = window.location.pathname;
  const use = pathname.slice(5, -1);
  const { problem, from, description } = state;
  /// get the fix reports from the database
  useEffect(() => {
    async function getFix() {
      await axios
        .get(`${API}/vehicles/${use}`)
        .then((resp) => {
          setFix(resp.data.repairs);
          setVa(resp.data._id);
        })
        .catch((err) => console.log());
    }

    getFix();
  }, [use]);
  const getIcon = (e) => {
    if (e === "1") {
      return <ImIcons.ImCheckmark />;
    } else return <ImIcons.ImCross />;
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  /// handle add or update fix
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!problem || !from || !description) {
      toast.error("Please fill all input field");
    } else {
      axios
        .put(`${API}/fix/${use}`, state)
        .then((resp) => {
          toast.success("Problem added successfully");
          setTimeout(() => {
            window.location.assign(
              `https://vigorous-meninsky-e72496.netlify.app/fix/${use}/`
            );
          }, 1500);
        })
        .catch((err) => toast.error("There is a problem"));
      setState({ problem: "", from: "", description: "" });
    }
  };
  /// delete fix
  const handleDelete = async (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that problem ?")
    ) {
      ve.problem = id.problem;
      ve.from = id.from;
      ve.description = id.description;

      await axios
        .patch(`${API}/fix/${use}`, ve)
        .then((resp) => {
          toast.success("Problem Removed successfully");
          setTimeout(() => {
            window.location.assign(
              `https://vigorous-meninsky-e72496.netlify.app/fix/${use}/`
            );
          }, 1500);
        })
        .catch((err) => toast.error("There is a problem"));
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Fix History List
      </h1>
      <div style={{ textAlign: "center" }}>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="FixHistory"
          sheet="tablexls"
          buttonText="Download Fix History"
        />
      </div>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Problem</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Problem"
                  name="problem"
                  value={problem || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="From"
                  name="from"
                  value={from || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={description || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-grid gap-2 mt-2">
                <Button type="submit" variant="primary" size="lg">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={8}>
            <div className="ta">
              <Table bordered hover id="table-to-xls">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Problem</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Fix Status</th>

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
                {fix &&
                  fix
                    .filter((vehicle) => {
                      return (
                        vehicle.problem
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        vehicle.from
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        vehicle.to
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        vehicle.price
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        vehicle.description
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      );
                    })
                    .map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.problem}</td>
                          <td>{item.from}</td>
                          <td>{item.to}</td>
                          <td>{item.price}</td>
                          <td>{item.description}</td>
                          <td>{getIcon(item.status)}</td>
                          <td>
                            {" "}
                            <ButtonGroup>
                              <Link
                                to={{
                                  pathname: `/fixupdate/${va}/`,
                                  fix: item,
                                }}
                              >
                                <Button variant="success">Update</Button>
                              </Link>
                              <Button
                                style={{ marginLeft: "5px" }}
                                variant="danger"
                                onClick={() => handleDelete(item)}
                              >
                                Delete
                              </Button>
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

export default Fix;
