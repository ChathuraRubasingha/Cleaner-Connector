import React, { useState } from "react";
import "./Layout.css";
import {
  FaBuilding,
  FaClipboardCheck,
  FaClock,
  FaCogs,
  FaShoppingCart,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className="navigation">
        <NavLink className="navLink" activeClassName="active" to="/profile">
          <FaUser style={{ margin: "0 20px 0 10px" }} />
          My Profile
        </NavLink>
        <NavLink className="navLink" activeClassName="active" to="/mysites">
          <FaBuilding style={{ margin: "0 20px 0 10px" }} /> My Clients & Sites
        </NavLink>
        <NavLink className="navLink" activeClassName="active" to="/mycleaner">
          <FaUsers style={{ margin: "0 20px 0 10px" }} />
          My Cleaners
        </NavLink>
        <NavLink className="navLink" activeClassName="active" to="/myareas&sites">
          <FaShoppingCart style={{ margin: "0 20px 0 10px" }} />
          Orders
        </NavLink>
        <NavLink className="navLink" activeClassName="active" to="/">
          <FaCogs style={{ margin: "0 20px 0 10px" }} />
          Operations
        </NavLink>
        <NavLink className="navLink" activeClassName="active" to="/">
          <FaClock style={{ margin: "0 20px 0 10px" }} />
          Time on site progress
        </NavLink>
        <NavLink className="navLink" activeClassName="active" to="/">
          <FaClipboardCheck style={{ margin: "0 20px 0 10px" }} />
          Attendance Summary
        </NavLink>
      </div>
      <div className="copyright">Copy right</div>
    </div>
  );
}

export default Sidebar;
