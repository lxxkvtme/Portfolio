import React from "react";
import "../assets/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="linkfooter">
        <div className="foot">
          <h3>Phone</h3>
          <p>+62 878 7077 3318</p>
        </div>
        <div className="foot">
          <h3>Email</h3>
          <p>danu.mahendra79@gmail.com</p>
        </div>
        <div className="foot">
          <h3>Follow Me</h3>
          <p>blablabla</p>
        </div>
        <p>
          &copy; 2021 By Danu Mahendra.
          <br />
          Proudly created with ReactJS
        </p>
      </div>
    </div>
  );
};

export default Footer;
