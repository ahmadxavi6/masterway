import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";
import { IconContext } from "react-icons";
function SideBar() {
  const [sidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar"></div>
        <nav className={sidebar ? "nav-menu active " : "nav-menu"}>
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
