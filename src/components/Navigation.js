import React, { useState } from "react";
import mondoRobotLogo from "../assets/mondo-robot-logo.png";
import "../components/Navigation.css";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [menu, setMenu] = useState("")

  // event listener for menu
const menuActivate = () => {
  setMenu(menu === "" ? "active" : "")
}

  return (
    <nav className="navbar">
      <div className={`left-nav ${menu}`}>
        <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
        <ul>
          <li>
            <a className={`navbar-links ${menu}`} href="">Robots</a>
          </li>
          <li>
            <a className={`navbar-links ${menu}`} href="">Results</a>
          </li>
        </ul>
      </div>
      <div className={`right-nav ${menu}`}>
        <ul>
          <li>
            <a className={`navbar-links ${menu}`} href="">Admin</a>
          </li>
          <li>
            <a className={`navbar-links ${menu}`} href="">Logout</a>
          </li>
        </ul>
      </div>
      <FaBars className={`bars ${menu}`} onClick={menuActivate}/>
    </nav>
  );
};

export default Navigation;
