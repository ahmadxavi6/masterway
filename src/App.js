import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncomeAndOutcome from "./pages/IncomeAndOutcome";
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
import Addadmin from "./pages/Addadmin";
import Traps from "./pages/Traps";



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
          <Route path="/addadmin" exact component={Addadmin}></Route>
          <Route path="/traps" exact component={Traps}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/vechiles" component={Vechiles}></Route>
          <Route exact path="/workers" component={Workers}></Route>
          <Route path="/workers/profile/" component={Worker}></Route>
          <Route path="/incomeAndOutcome" component={IncomeAndOutcome}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/map" component={MapGps}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
