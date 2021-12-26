import React from "react";
import "../assets/style.css";

const Contact = () => {
  return (
    <div className="body judul">
      <h1>Contact</h1>
      <div className="contact">
        <div className="mycontact">
          <p style={{ marginBottom: 40 }}>
            Looking forward to hearing from you
          </p>
          <div>
            <h3>Phone</h3>
            <p>+62 878 7077 3318</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>danu.mahendra79@gmail.com</p>
          </div>
        </div>
        <div className="send">
          <form>
            <div className="name">
              <div className="form">
                <label>First Name</label>
                <input />
              </div>
              <div className="form">
                <label>Last Name</label>
                <input />
              </div>
            </div>
            <div className="subject">
              <div className="form">
                <label>Email</label>
                <input />
              </div>
              <div className="form">
                <label>Subject</label>
                <input />
              </div>
            </div>
            <div className="message">
              <div className="textarea">
                <label>Message</label>
                <textarea></textarea>
              </div>
              <div className="submit">
                <p>Submit</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
