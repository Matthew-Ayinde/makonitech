import React from "react";
import "./styles.scss";

const project = () => {
  return (
    <section className="contact-project">
      <div className="contact-project__left">
        <h2>Let's talk about your next big project.</h2>

        <form>
          <div className="contact-form-group">
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Add your name" id="fullName" type="text" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="country">Country</label>
            <div className="select-wrapper">
              <select id="country">
                <option>Nigeria</option>
              </select>
            </div>
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input placeholder="Add your email" id="email" type="email" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="city">Country</label>
            <input placeholder="Add your city" id="city" type="text" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone">Phone</label>
            <input placeholder="Add your phone number" id="phone" type="text" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <input placeholder="Add your message" id="message" type="text" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="company">Company</label>
            <input placeholder="Add your company" id="company" type="text" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message2">Message</label>
            <input placeholder="Add your message" id="message2" type="text" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input placeholder="Add your job title" id="jobTitle" type="text" />
          </div>
          <div className="contact-form-group">
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </form>

        <div className="contact-form-info">
          <p>
            By submitting, you consent to Slalom processing your information in
            accordance with our <a href="/">Privacy Policy</a>. We take your
            privacy seriously; opt out of <strong>email updates</strong> at any
            time. <br /> This site is protected by reCAPTCHA and the Google{" "}
            <strong>Privacy Policy</strong> and{" "}
            <strong>Terms of Service</strong> apply.
          </p>
        </div>
      </div>

      <div className="contact-project__right"></div>
    </section>
  );
};

export default project;
