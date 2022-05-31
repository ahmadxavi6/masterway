import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
const API = "https://masterway.herokuapp.com";

function HoursReport() {
  const [Ye, setYe] = useState("2022");
  const [Mo, setMo] = useState("1");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState();
  let user = {
    date: "",
    file: "",
  };

  const handlessChange = (e) => {
    setYe(e.target.value);
  };
  const pathname = window.location.pathname;
  const use = pathname.slice(0, -1);
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleClick = async (e) => {
    const file = e.target.files[0];

    const base64 = await convertBase64(file);

    setReport(base64);
    setMo(e.target.name);
  };
  const handlesClick = async () => {
    setLoading(true);
    user.file = report;
    user.date = Ye + "/" + Mo;
    axios
      .post(`${API}${use}`, user, {
        headers: {
          enctype: "multipart/form-data",
        },
      })
      .then((resp) => {
        toast.success("Profile Picture Changed");
        setLoading(false);
      })
      .catch((err) => toast.error("There is problem to upload pic"));
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Worker Hours Reports
      </h1>
      <Container>
        <Row>
          <Col md={15}>
            <div className="tc">
              <Table bordered hover style={{ marginTop: "32px" }}>
                <thead>
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
                    <th>Upload reports</th>
                    <th>View Report</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>January</th>
                    <th>
                      <input
                        type="file"
                        name="jan"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>February</th>
                    <th>
                      <input
                        type="file"
                        name="feb"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>March</th>
                    <th>
                      <input
                        type="file"
                        name="mar"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>April</th>
                    <th>
                      <input
                        type="file"
                        name="apr"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>May</th>
                    <th>
                      <input
                        type="file"
                        name="may"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>June</th>
                    <th>
                      <input
                        type="file"
                        name="jun"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>July</th>
                    <th>
                      <input
                        type="file"
                        name="jul"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>August</th>
                    <th>
                      <input
                        type="file"
                        name="aug"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>September</th>
                    <th>
                      <input
                        type="file"
                        name="sep"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>October</th>
                    <th>
                      <input
                        type="file"
                        name="oct"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>November</th>
                    <th>
                      <input
                        type="file"
                        name="nov"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                  <tr>
                    <th>December</th>
                    <th>
                      <input
                        type="file"
                        name="dec"
                        onChange={handleClick}
                      ></input>
                      {loading ? (
                        <Spinner
                          style={{ marginRight: 35 }}
                          animation="border"
                          variant="danger"
                        />
                      ) : null}
                      <Button variant="success" onClick={handlesClick}>
                        submit
                      </Button>
                    </th>
                    <th>tloush</th>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HoursReport;
