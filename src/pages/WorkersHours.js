import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Container, Table, Row, Col, Form } from "react-bootstrap";
const API = "https://masterway.herokuapp.com";
/// worker hours that he did in selected year and month
function WorkersHours() {
  const init = [{ hour: "", day: "" }];
  const [hours, setHours] = useState(init);
  const pathname = window.location.pathname;
  const use = pathname.slice(0, -1);

  const user = { month: "" };

  const [Ye, setYe] = useState("2022");
  const [Mo, setMo] = useState("1");

  const handlesChange = (e) => {
    setMo(e.target.value);
  };
  const handlessChange = (e) => {
    setYe(e.target.value);
  };

  let min = 0;
  let sec = 0;
  let hour1 = 0;
  let tempsec = 0;
  let tempmin = 0;
  let temphour = 0;
  /// change the hours from string to int and additon them to all hours did in the month
  for (let i = 0; i < hours.length; i++) {
    tempsec =
      tempsec + parseInt(hours[i].hour[6]) * 10 + parseInt(hours[i].hour[7]);
    tempmin =
      tempmin + parseInt(hours[i].hour[3]) * 10 + parseInt(hours[i].hour[4]);
    temphour =
      temphour + parseInt(hours[i].hour[0]) * 10 + parseInt(hours[i].hour[1]);
  }
  while (tempsec >= 60) {
    tempsec = tempsec - 60;
    tempmin = tempmin + 1;
  }
  sec = tempsec;
  while (tempmin >= 60) {
    tempmin = tempmin - 60;
    temphour = temphour + 1;
  }
  min = tempmin;
  hour1 = temphour;
  /// get hours of the worker did in selected month and year
  useEffect(() => {
    const getHours = async () => {
      let x = "/" + Mo + "/" + Ye;
      user.month = x;
      await axios
        .patch(`${API}${use}`, user)
        .then((resp) => {
          setHours(resp.data);
        })
        .catch((err) => toast.error("There is a problem in the server"));
    };

    getHours();
  }, [Mo, Ye, use]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Worker Hours</h1>
      <Container>
        <Row>
          <Col md={15}>
            <div className="ta">
              <Table bordered hover style={{ marginTop: "32px" }}>
                <thead>
                  <tr>
                    <th>
                      Month:
                      <Form.Select
                        className="browser-default "
                        name="Mo"
                        style={{ position: "stick" }}
                        onChange={handlesChange}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Form.Select>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      Year:
                      <Form.Select
                        className="browser-default "
                        name="Ye"
                        style={{ position: "stick" }}
                        onChange={handlessChange}
                      >
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>{" "}
                      </Form.Select>
                    </th>
                  </tr>
                </thead>

                {hours &&
                  hours.map((item, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>{item.day}</td>
                        <td>
                          {item.hour[0] +
                            item.hour[1] +
                            item.hour[2] +
                            item.hour[3] +
                            item.hour[4] +
                            item.hour[5] +
                            item.hour[6] +
                            item.hour[7]}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                <tfoot>
                  <tr>
                    <h5>
                      Total Hours in {Mo}/{Ye} : {hour1} hours {min} minutes{" "}
                      {sec} seconds{" "}
                    </h5>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WorkersHours;
