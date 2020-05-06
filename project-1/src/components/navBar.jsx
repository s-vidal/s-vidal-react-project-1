import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css";

const navBar = () => {
  return (
    <div className="background-black navbar-height">
      <ul className="nav custom-nav">
        <li className="nav-item">
          <Link className="nav-link color-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color-white" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navBar;
