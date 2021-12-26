import React from "react";
import "../assets/style.css";
import profil from "../assets/profil.jpg";

const Project = () => {
  return (
    <div className="body judul">
      <h1>Project</h1>
      <div className="project">
        <div className="nameproject">
          <h3>Project Name</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <img src={profil} />
      </div>
      <div className="project">
        <div className="nameproject">
          <h3>Project Name</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <img src={profil} />
      </div>
    </div>
  );
};

export default Project;
