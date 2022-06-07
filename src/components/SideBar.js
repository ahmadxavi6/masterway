import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";
import App from "../App";
import * as GrIcons from "react-icons/gr";
/// side bar of the web
function SideBar() {
  const [sidebar] = useState(true);
  /// sign out fucntion
  const signout = () => {
    sessionStorage.removeItem("user");
    window.location.assign("/");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <ul className="nav-menu-items">
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            <li>
              {" "}
              <a href="#" onClick={signout} className="btn btn-info btn-lg">
                <span>
                  <GrIcons.GrLogout />
                </span>{" "}
                Log out
              </a>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
