import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="contact-section">
        <div className="contact-form-card" id="ContactUs">
          <h2>
            <span>CONTACT</span> FORM
          </h2>
          <form className="contact-form">
            <div className="name-div">
              <label htmlFor="name">Name:</label>
              <input type="text" id="" placeholder="Full Name" name="name" />
            </div>
            <div className="email-div">
              <label htmlFor="email">Enter Your Email:</label>
              <input type="email" placeholder="Enter your email" name="email" />
            </div>
            <div className="msg-div">
              <label htmlFor="message">Enquiry type:</label>
              <textarea
                id="enquiry"
                cols="30"
                rows="10"
                placeholder="Leave us a message"
                name="enquiry"
              ></textarea>
            </div>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
