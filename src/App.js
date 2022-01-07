import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncomeAndOutcome from "./pages/IncomeAndOutcome";
import Vechiles from "./pages/Vechiles";
import Workers from "./pages/Workers";
import Worker from "./pages/Worker";
import Schedule from "./pages/Schedule";
import React from "react";
import MapGps from "./pages/MapGps";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <SideBar />
        <Switch>
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
