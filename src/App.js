import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import Navigation from "./components/Navigation";
import Robots from "./components/Robots";
import Results from "./components/Results";
import Error from "./error/Error";
import Admin from "./Admin";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/robots" exact component={Robots} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/admin" exact component={Admin} />
        <ProtectedRoute path="/results" exact component={Results} />
        <Route path="/error" exact component={Error} />
        <Route path="*" exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
