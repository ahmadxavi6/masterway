import React from "react";
import * as FaICons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
/// the data in the sidebar
export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Workers",
    path: "/workers",
    icon: <IoIcons.IoManOutline />,
    cName: "nav-text",
  },
  {
    title: "Vechiles",
    path: "/Vechiles",
    icon: <FaICons.FaCarSide />,
    cName: "nav-text",
  },

  {
    title: "Schedule",
    path: "/schedule",
    icon: <AiIcons.AiOutlineSchedule />,
    cName: "nav-text",
  },
  {
    title: "Admins",
    path: "/admins",
    icon: <RiIcons.RiAdminFill />,
    cName: "nav-text",
  },
  {
    title: "Map",
    path: "/map",
    icon: <FaICons.FaMap />,
    cName: "nav-text",
  },

  {
    title: "Password",
    path: "/passwordre",

    icon: <RiIcons.RiLockPasswordLine />,
    cName: "nav-text",
  },
];
