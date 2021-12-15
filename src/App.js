import './App.css';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" ;
import Home from './pages/Home';
import IncomeAndOutcome from './pages/IncomeAndOutcome'
import Vechiles from './pages/Vechiles'
import Workers from './pages/Workers'
import Schedule from './pages/Schedule'


function App() {
  return (
    <>
    <Router>
   <SideBar/>
      <Switch>
        <Route path="/" exact component ={Home} >
          </Route>
        <Route path="/vechiles"component ={Vechiles} >
        </Route>
        <Route path="/workers"component ={Workers} >
        </Route>
        <Route path="/incomeAndOutcome"component ={IncomeAndOutcome} >
        </Route>
        <Route path="/schedule"component ={Schedule} >
        </Route>
      </Switch>
   </Router>
   </>
  );
}

export default App;
