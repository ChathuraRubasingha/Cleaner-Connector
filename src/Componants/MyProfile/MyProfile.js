import React from 'react'
import "./Profile.css"
import logo from "../../Assets/logo.png"
function MyProfile() {
  return (
    <div className="profile-container">
      <div className="content">
        <h1>Welcome to Clean Connect's Service Provider Portal</h1>
        <img src={logo} alt="Clean Connect Logo" className="logo" />
        <p>Commercial Cleaning & Property Services</p>
      </div>
    </div>
  )
}

export default MyProfile