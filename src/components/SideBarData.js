import React from "react";
import * as FaICons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";

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
    title: "IncomeAndOutcome",
    path: "/incomeAndOutcome",
    icon: <BsIcons.BsCashCoin />,
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
    cName: "nav-text",
  },
  {
    title: "Map",
    path: "/map",
    cName: "nav-text",
  },
];
