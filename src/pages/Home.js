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
      <div className="workers">
        <div className="w3-round">
          <img
            src={"data:image/gif;base64," + profile}
            id="profile"
            width="400"
            height="480"
            border=" 5px solid rgb(255, 1, 1)"
            style={{ borderRadius: 40, marginLeft: "20%" }}
            alt=""
          ></img>
          <div>
            {" "}
            Welcome Back {name} <br></br>
            {"\u00a0\u00a0"} {"\u00a0\u00a0"} {"\u00a0\u00a0"}
            {"\u00a0\u00a0"}
            {"\u00a0"} {"\u00a0\u00a0"} {"\u00a0\u00a0"} {"\u00a0\u00a0"}{" "}
            {"\u00a0\u00a0"} {"\u00a0"}
            {date}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
