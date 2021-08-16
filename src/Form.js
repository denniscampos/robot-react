import React from "react";
import "./Form.css";
import mondoRobotLogo from "./assets/mondo-robot-logo.png";
import { useHistory } from "react-router-dom";

const Form = ({ label1, label2, type, type2, password, button1, button2 }) => {
  const history = useHistory();

  // gets register page route.
  function handleClick() {
    history.push("/register");
  }

  return (
    <div className="login-page">
      <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
      <form className="login-form" action="">
        <label className="label-1">{label1}</label>
        <input className="input-2" type={type} />
        <label className="label-2">{label2}</label>
        <input className="input-2" type={type2} />
        <label className="label-3">Password</label>
        <input className="input-3" type="password" />
        <div className="btn">
          <button className="btn-login" type="submit">
            {button1}
          </button>
          <button onClick={handleClick} className="btn-register" type="submit">
            {button2}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
