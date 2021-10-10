import React from "react";
import "./styles.scss";
import Multiselect from "multiselect-react-dropdown";

const ProfileEdit = () => {
  return (
    <>
      <div className="edit-profile-head">
        <h1>Welcome John Leiron</h1>
        <p>You can edit and update your profile here anyday, anytime</p>
      </div>

      <div className="edit-personal-form">
        <h2>Personal Details</h2>
        <form className="personal-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="John" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Leiron" id="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <div className="select-wrapper">
              <select id="country">
                <option>US</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <div className="select-wrapper">
              <select id="state">
                <option>Houston</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
        </form>
      </div>

      <div className="edit-job-form">
        <h2>Job Preferences</h2>
        <form className="job-form">
          <div className="form-group">
            <label htmlFor="country2">
              What country would you like to work in?
            </label>
            <div className="select-wrapper">
              <select id="country2">
                <option>London</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">What’s your job title?</label>
            <Multiselect
              placeholder="SELECT JOB TITLE"
              isObject={false}
              onRemove={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck() {}}
              options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
                "Option 5",
              ]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">What’s your years of experience?</label>
            <div className="select-wrapper">
              <select id="experience">
                <option>0 - 3 years</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="industries">
              What industries do you have experience in?
            </label>
            <Multiselect
              placeholder="SELECT INDUSTRIES"
              isObject={false}
              onRemove={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck() {}}
              options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
                "Option 5",
              ]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="workCity">
              What city would you like to work in?
            </label>
            <div className="select-wrapper">
              <select id="workCity">
                <option>Burnley</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="submit-btn-profile">
        <button>UPDATE</button>
      </div>
    </>
  );
};

export default ProfileEdit;
