import React from "react";
import { useState, useEffect } from "react";
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
  const [Ye, setYe] = useState("None");
  const [Mo, setMo] = useState("1");

  const [lo, setLo] = useState(false);
  const [report, setReport] = useState();
  const [arr, setArr] = useState("");
  let user = {
    date: "",
    file: "",
  };
  let useer = {
    date: "",
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
    setLo(true);
    user.file = report;
    user.date = Ye + "/" + Mo;
    await axios
      .post(`${API}${use}`, user, {
        headers: {
          enctype: "multipart/form-data",
        },
      })
      .then((resp) => {})
      .catch((err) => toast.error("There is problem to upload pic"));
    useer.date = Ye;
    await axios
      .patch(`${API}${use}`, useer)
      .then((resp) => {
        setArr(resp.data);
        toast.success("Salary report has been uploaded successfully");
      })
      .catch((err) => toast.error("There is a problem in the server"));
    setLo(false);
  };

  const getFile = (e) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].date[5] + arr[i].date[6] + arr[i].date[7] === e) {
        var a = document.createElement("a");
        a.style = "display: none";
        a.href = arr[i].file;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  };
  useEffect(() => {
    const getReports = async () => {
      useer.date = Ye;
      setLo(true);
      await axios
        .patch(`${API}${use}`, useer)
        .then((resp) => {
          setArr(resp.data);
        })
        .catch((err) => toast.error("There is a problem in the server"));
      setLo(false);
    };

    getReports();
  }, [Ye, use]);
  if (lo) {
    return (
      <Spinner
        style={{ padding: "150px", marginLeft: "880px", marginTop: "280px" }}
        animation="border"
        variant="info"
      />
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Worker Salary Reports
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
                        <option selected>{Ye}</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </Form.Select>
                    </th>
                    <th>Upload reports (Accepted Fomrats : PNG or JPEG)</th>
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
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("jan");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>February</th>
                    <th>
                      <input
                        type="file"
                        name="feb"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("feb");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>March</th>
                    <th>
                      <input
                        type="file"
                        name="mar"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("mar");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>April</th>
                    <th>
                      <input
                        type="file"
                        name="apr"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("apr");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>May</th>
                    <th>
                      <input
                        type="file"
                        name="may"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("may");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>June</th>
                    <th>
                      <input
                        type="file"
                        name="jun"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("jun");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>July</th>
                    <th>
                      <input
                        type="file"
                        name="jul"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("jul");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>August</th>
                    <th>
                      <input
                        type="file"
                        name="aug"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("aug");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>September</th>
                    <th>
                      <input
                        type="file"
                        name="sep"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("sep");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>October</th>
                    <th>
                      <input
                        type="file"
                        name="oct"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("oct");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>November</th>
                    <th>
                      <input
                        type="file"
                        name="nov"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("nov");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>December</th>
                    <th>
                      <input
                        type="file"
                        name="dec"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleClick}
                      ></input>

                      <Button variant="warning" onClick={handlesClick}>
                        Upload
                      </Button>
                    </th>
                    <th>
                      <Button
                        variant="success"
                        onClick={() => {
                          getFile("dec");
                        }}
                      >
                        {" "}
                        Download
                      </Button>
                    </th>
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
