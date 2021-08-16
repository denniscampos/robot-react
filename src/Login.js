import React from "react";
import "./Login.css";
import mondoRobotLogo from "./assets/mondo-robot-logo.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const history = useHistory();

  // gets register page route.
  function handleClick() {
    history.push("/register");
  }

  return (
    <div className="register-page">
      <div className="login-page">
        <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
        <form className="login-form" action="">
          <label className="email-label">Email</label>
          <input className="email-input" type="email" />
          <label className="password-label">Password</label>
          <input className="password-input" type="password" />
          <div className="btn">
            <button className="btn-login" type="submit">
              Log in
            </button>
            <button
              onClick={handleClick}
              className="btn-register"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
