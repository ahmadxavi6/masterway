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
import "./Workers.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  addBudget,
  deleteBudget,
  loadSingleBudget,
  loadBudgets,
  updateBudget,
} from "../redux/budgets/actionB";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import * as ImIcons from "react-icons/im";

const initialStateB = {
  Name: "",
  date: "",
  type: "",
  cost: "",
  description: "",
};
/// budgets page
const Budgets = () => {
  const [state, setState] = useState(initialStateB);
  const [editMode, setEditMode] = useState(false);
  const [budgetId, setBudgetId] = useState(null);
  const dispatch = useDispatch();
  const { budgets, msg, budget } = useSelector((state) => state.datab);

  let inc = 0;
  let out = 0;
  let sum = 0;
  let x = 0;

  const { Name, date, type, cost, description } = state;
  let [search, setSearch] = useState("");
  // for (let i = 0; i < budgets.length; i++) {
  //   if (budgets[i].type === "income") {
  //     inc = inc + parseInt(budgets[i].cost);
  //   } else {
  //     out = out + parseInt(budgets[i].cost);
  //   }
  // }
  // sum = inc - out;
  /// get the budgets and put them in the table
  useEffect(() => {
    dispatch(loadBudgets());
  }, [dispatch]);
  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
  }, [msg]);
  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    if (budget) {
      setState({ ...budget });
    }
  }, [budget]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  /// handle add or update budget
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !date || !cost || !description || !type) {
      toast.error("Please fill all input field");
    } else {
      if (!editMode) {
        dispatch(addBudget(state));
        setState({
          Name: "",
          date: "",

          cost: "",
          description: "",
        });
      } else {
        dispatch(updateBudget(state, budgetId));
        setState({
          Name: "",
          date: "",

          cost: "",
          description: "",
        });
        setEditMode(false);
        setBudgetId(null);
      }
    }
  };
  /// delete budget
  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you wanted to delete that field ?")) {
      dispatch(deleteBudget(id));
    }
  };
  /// update budget
  const handleUpdate = (id) => {
    dispatch(loadSingleBudget(id));
    setBudgetId(id);
    setEditMode(true);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Budget List</h1>
      <div style={{ textAlign: "center" }}>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="Budget"
          sheet="tablexls"
          buttonText="Download Budget Info"
        />
      </div>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="Name"
                  value={Name || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descritpion"
                  name="description"
                  value={description || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  name="date"
                  value={date || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cost"
                  name="cost"
                  value={cost || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select
                  className="browser-default "
                  name="type"
                  style={{ position: "stick" }}
                  onChange={handleChange}
                >
                  <option defaultValue="None">Select type </option>
                  <option value="Income">Income</option>
                  <option value="Outcome">Outcome</option>
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
              <Table bordered hover id="table-to-xls">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Cost</th>
                    <th>Type</th>

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
                {budgets &&
                  budgets
                    .filter((budget) => {
                      return (
                        budget.Name.toLowerCase().includes(
                          search.toLowerCase()
                        ) ||
                        budget.date
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        budget.cost
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        budget.description
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        budget.type.toLowerCase().includes(search.toLowerCase())
                      );
                    })
                    .map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.Name}</td>
                          <td>{item.description}</td>
                          <td>{item.date}</td>
                          <td>{item.cost}</td>
                          <td>{item.type}</td>

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
                            </ButtonGroup>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                {budgets &&
                  budgets
                    .filter((budget) => {
                      return (
                        budget.Name.toLowerCase().includes(
                          search.toLowerCase()
                        ) ||
                        budget.date
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        budget.cost
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        budget.description
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        budget.type.toLowerCase().includes(search.toLowerCase())
                      );
                    })
                    .forEach((item) => {
                      if (item.type === "Income") {
                        inc = inc + parseInt(item.cost);
                      } else {
                        out = out + parseInt(item.cost);
                      }

                      sum = inc - out;
                    })}
              </Table>
              <div
                style={{
                  width: "100%",

                  height: "fit-content",
                  border: "2px solid black",

                  background: "#ebf2fa",
                  textAlign: "left",
                }}
              >
                <h5>
                  Total Incomes : {inc} {"\u00a0\u00a0"} Total Outcomes : {out}{" "}
                  {"\u00a0\u00a0"}
                  Total Budget : {sum}
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Budgets;
