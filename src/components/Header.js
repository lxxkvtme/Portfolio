import React from "react";
import { Link } from "react-router-dom";
import "../assets/header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <div className="bulat"></div>
        <Link to="/">
          <h3>Danu Mahendra</h3>
        </Link>
        <p>Programming & Designer</p>
      </div>
      <div className="nav">
        <Link to="/resume">
          <p>Resume</p>
        </Link>
        |
        <Link to="/project">
          <p>Project</p>
        </Link>
        |
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
