import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import Vechiles from "./pages/Vechiles";
import Workers from "./pages/Workers";
import Worker from "./pages/Worker";
import Schedule from "./pages/Schedule";
import { useState } from "react";
import Login from "./pages/Login";
import React from "react";
import MapGps from "./pages/MapGps";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admins from "./pages/Admins";
import Trips from "./pages/Trips";
import Admin from "./pages/Admin";
import WorkersHours from "./pages/WorkersHours";
import Vehcile from "./pages/Vechile";
import Fix from "./pages/Fix";
import FixUpdate from "./pages/FixUpdate";
import HoursReport from "./pages/HoursReport";
import PasswordRe from "./pages/PasswordRe";
import Budget from "./pages/Budget";
/// if thers no token it will go to login page if there is atoken it will go the webapp
function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <ToastContainer />
      <Router>
        <SideBar />
        <Switch>
          <Route path="/admins" exact component={Admins}></Route>
          <Route path="/trips/" component={Trips}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/vechiles" component={Vechiles}></Route>
          <Route exact path="/workers" component={Workers}></Route>
          <Route path="/workers/profile/" component={Worker}></Route>
          <Route path="/admins/profile/" component={Admin}></Route>

          <Route path="/workersHours/" component={WorkersHours}></Route>
          <Route path="/passwordre/" component={PasswordRe}></Route>
          <Route path="/hoursreport/" component={HoursReport}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/fix/" component={Fix}></Route>
          <Route path="/fixupdate/" component={FixUpdate}></Route>

          <Route path="/vehicles/" component={Vehcile}></Route>
          <Route path="/map" component={MapGps}></Route>
          <Route path="/budget" component={Budget}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
