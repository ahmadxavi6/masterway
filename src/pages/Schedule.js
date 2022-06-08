import React from "react";
import { useEffect } from "react";
import "./Schedule.css";
import { useSelector, useDispatch } from "react-redux";
import { loadWorkers } from "../redux/workers/actions";
import { Table, ButtonGroup, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadProfile } from "../redux/workers/actions";
import { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import axios from "axios";
import { toast } from "react-toastify";
import "./Workers.css";
const API = "https://masterway.herokuapp.com/";
/// page of the schedule making and send shift
const Schedule = () => {
  const { workers } = useSelector((state) => state.dataw);
  const dispatch = useDispatch();

  let [search, setSearch] = useState("");
  /// get the workers
  useEffect(() => {
    dispatch(loadWorkers());
  }, [dispatch]);

  const handlesClick = (id) => {
    dispatch(loadProfile(id));
  };
  ///add worker shift
  const handleCClick = async (id) => {
    dispatch(loadProfile(id));
    await axios
      .patch(`${API}/trips/${id}`)
      .then((resp) => {
        toast.success("Shifts has been removed");
        setTimeout(() => {
          window.location.assign(
            "https://vigorous-meninsky-e72496.netlify.app/schedule"
          );
        }, 1500);
      })
      .catch((err) => toast.error("There is a proplem"));
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Workers Schedule
        </h1>
        <div style={{ textAlign: "center" }}>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="Schedule"
            sheet="Schedule"
            buttonText="Download Work Schedule"
          />
        </div>
        <div className="tb">
          <Table bordered hover id="table-to-xls" style={{ marginTop: "1%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thur</th>
                <th>Fri</th>
                <th>Sat</th>
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
            {workers &&
              workers
                .filter((worker) => {
                  return worker.fName
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{item.fName}</td>
                      <td>
                        {item.weekShifts.Sun.hours}
                        <p>{item.weekShifts.Sun.info}</p>
                      </td>
                      <td>
                        {item.weekShifts.Mon.hours}
                        <p>{item.weekShifts.Mon.info}</p>
                      </td>
                      <td>
                        {item.weekShifts.Tue.hours}
                        <p>{item.weekShifts.Tue.info}</p>
                      </td>
                      <td>
                        {item.weekShifts.Wed.hours}
                        <p>{item.weekShifts.Wed.info}</p>
                      </td>
                      <td>
                        {item.weekShifts.Thur.hours}
                        <p>{item.weekShifts.Thur.info}</p>
                      </td>
                      <td>
                        {item.weekShifts.Fri.hours}
                        <p>{item.weekShifts.Fri.info}</p>
                      </td>
                      <td>
                        {item.weekShifts.Sat.hours}
                        <p>{item.weekShifts.Sat.info}</p>
                      </td>
                      <td>
                        <ButtonGroup>
                          <Link
                            to={{
                              pathname: `/trips`,
                              worker: item,
                            }}
                          >
                            <Button
                              variant="success"
                              onClick={() => handlesClick(item._id)}
                              style={{ marginLeft: "5px" }}
                            >
                              Add Shifts
                            </Button>
                          </Link>
                          <Button
                            variant="danger"
                            onClick={() => handleCClick(item._id)}
                          >
                            Clear Shifts
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  </tbody>
                ))}
          </Table>
        </div>
      </Container>
    </>
  );
};
export default Schedule;
