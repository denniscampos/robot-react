import React from "react";
import mondoRobotLogo from "../assets/mondo-robot-logo.png";
import "../components/Navigation.css";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
        <ul>
          <li>
            <a href="">Robots</a>
          </li>
          <li>
            <a href="">Results</a>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <ul>
          <li>
            <a href="">Admin</a>
          </li>
          <li>
            <a href="">Logout</a>
          </li>
        </ul>
      </div>
      <FaBars className="bars" />
    </nav>
  );
};

export default Navigation;
