import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import Navigation from "./components/Navigation";
import Robots from "./components/Robots";
import Results from "./components/Results";
import Button from "./components/Button";
import Error from "./components/Error";
import Admin from "./components/Admin";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/robots" exact component={Robots} />
        <Route path="/register" exact component={Register} />
        <Route path="/button" exact component={Button} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/results" exact component={Results} />
        <Route path="/error" exact component={Error} />
        // for any routes that don't exist.
        <Route path="*" exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
