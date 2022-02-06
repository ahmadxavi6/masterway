import React from "react";
import { useEffect } from "react";
import "./Schedule.css";
import { useSelector, useDispatch } from "react-redux";
import { loadWorkers } from "../redux/workers/actions";
import { Table, ButtonGroup, Button } from "react-bootstrap";

const Schedule = () => {
  const { workers } = useSelector((state) => state.dataw);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWorkers());
  }, [dispatch]);

  return (
    <Table bordered hover>
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
        </tr>
      </thead>
      {workers &&
        workers.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.fName}</td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                {" "}
                <select className="browser-default " name="saturday">
                  <option value=""></option>
                  <option value="OFF">OFF</option>
                  <option value="8am-5pm">8am-5pm</option>
                  <option value="9am-6pm">9am-6pm</option>
                  <option value="10am-7pm">10am-7pm</option>
                  <option value="11am-8pm">11am-8pm</option>
                  <option value="12pm-9pm">12pm-9pm</option>
                  <option value="1pm-10pm">1pm-10pm</option>
                  <option value="2pm-11pm">2pm-11pm</option>
                  <option value="3pm-12am">3pm-12am</option>{" "}
                </select>
              </td>
              <td>
                <ButtonGroup>
                  <Button style={{ marginRight: "5px" }} variant="success">
                    Add
                  </Button>
                  <Button variant="danger">Clear</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        ))}
    </Table>
  );
};
export default Schedule;
