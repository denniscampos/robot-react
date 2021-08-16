import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Navigation from "./components/Navigation";
import Robots from "./components/Robots";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        {/* navigation is here as a temporary means to check route */}
        <Route path="/navigation" exact component={Navigation} />
        <Route path="/robots" exact component={Robots} />
      </Switch>
    </Router>
  );
}

export default App;
