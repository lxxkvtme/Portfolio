import React from "react";
import profil from "../assets/profil.jpg";
import "../assets/style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="profil body">
      <img src={profil} />
      <div className="teks">
        <h1>Hello</h1>
        <div className="about">
          <h4>A Bit About Me</h4>
          <p>
            Fresh graduate from Ibn Khaldun Bogor University, My Passion is
            Programming and UI/UX Designer.
          </p>
        </div>
        <div className="link">
          <Link className="mylink link1" to="/resume">
            Resume
          </Link>
          <Link className="mylink link2" to="/project">
            Project
          </Link>
          <Link className="mylink link3" to="contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
