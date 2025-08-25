import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div> <h1>My Profile</h1>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />/</div>
  )
}

export default Profile