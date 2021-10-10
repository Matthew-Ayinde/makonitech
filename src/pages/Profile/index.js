import React from "react";
import "./styles.scss";
import { NavLink, Switch, Route } from "react-router-dom";
import ProfileEdit from "./Edit";

const Profile = () => {
  return (
    <div className="profile-page">
      <nav className="profile-tab">
        <ul className="profile-tab__headers">
          <li>
            <NavLink
              to="/profile/edit"
              className="profile-page-link"
              activeClassName="active"
              exact
            >
              EDIT PROFILE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="profile-page-link"
              activeClassName="active"
              exact
            >
              SAVED JOBS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="profile-page-link"
              activeClassName="active"
              exact
            >
              OUR TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="profile-page-link"
              activeClassName="active"
              exact
            >
              RECOMMENDED JOBS
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="profile-page__contents">
        <Switch>
          <Route path="/profile/edit">
            <ProfileEdit />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Profile;
