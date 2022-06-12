import { Container } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

/// home page
function Home() {
  var x = sessionStorage["picture"];
  var y = sessionStorage["name"];
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");

  const current = new Date();
  useEffect(() => {
    setProfile(x);
    setName(y);
  }, [profile, x, y]);
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <Container>
        <div className="workers">
          <div className="w3-round">
            <img
              src={"data:image/gif;base64," + profile}
              id="profile"
              width="614.4px"
              height="614.4px"
              border=" 5px solid rgb(255, 1, 1)"
              style={{ borderRadius: 40, marginLeft: "8%" }}
              alt=""
            ></img>
            <div style={{ alignItems: "center" }}>
              {" "}
              {"\u00a0\u00a0"} Welcome Back {" \u00a0"}
              {name} <br></br>
              {"\u00a0\u00a0"} Date : {date}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
