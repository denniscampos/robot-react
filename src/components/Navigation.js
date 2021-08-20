import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import mondoRobotLogo from "../assets/mondo-robot-logo.png";
import "../components/Navigation.css";
import { FaBars } from "react-icons/fa";
import adminWhitelist from "../auth/admin-whitelist";

const Navigation = () => {
  const [menu, setMenu] = useState("");

  // event listener for menu
  const menuActivate = () => {
    setMenu(menu === "" ? "active" : "");
  };

  const history = useHistory();

  const logout = () => {
    //clears out token in local storage
    window.localStorage.clear();
    history.push("/");
  };

  const adminNavItem = () => {
    const userEmail = window.localStorage.getItem("user-email");
    if (new RegExp(adminWhitelist.join("|")).test(userEmail)) {
      return (
        <li>
          <a className={`navbar-links ${menu}`} href="/admin">
            Admin
          </a>
        </li>
      );
    }
  };

  return (
    <nav className={`navbar ${menu}`}>
      <img
        className="img-logo"
        src={mondoRobotLogo}
        alt="Logo of Mondo Robot"
      />
      <div className={`navbar-mobile ${menu}`}>
        <div className={`left-nav ${menu}`}>
          <ul>
            <li>
              <a className={`navbar-links ${menu}`} href="/robots">
                Robots
              </a>
            </li>
            <li>
              <a className={`navbar-links ${menu}`} href="/results">
                Results
              </a>
            </li>
          </ul>
        </div>
        <div className={`right-nav ${menu}`}>
          <ul>
            {adminNavItem()}
            <li>
              <a
                className={`navbar-links ${menu}`}
                href="#logout"
                onClick={logout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <FaBars className={`bars ${menu}`} onClick={menuActivate} />
    </nav>
  );
};

export default Navigation;
