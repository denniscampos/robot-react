import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import Navigation from "./components/Navigation";
import Robots from "./components/Robots";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/robots" exact component={Robots} />
        <Route path="/button" exact component={Button} />
      </Switch>
    </Router>
  );
}

export default App;
