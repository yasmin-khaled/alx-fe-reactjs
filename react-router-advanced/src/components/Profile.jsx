import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="/profile/details">Profile Details</Link>
        <Link to="/profile/settings">Profile Settings</Link>
      </nav>
      
      <Routes>
        <Route path="/profile/details" component={ProfileDetails} />
        <Route path="/profile/settings" component={ProfileSettings} />
      </Routes>
    </div>
  );
}

export default Profile;