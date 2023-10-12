import React from "react";
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
    <div className="sidebar">
      <div className="navigation">
        <NavLink className="nav" activeClassName="active" to="/profile">
          <FaUser style={{ padding: "0 20px 0 10px" }} />
          My Profile
        </NavLink>
        <NavLink className="nav" activeClassName="active" to="/">
          <FaBuilding style={{ padding: "0 20px 0 10px" }} /> My Clients & Sites
        </NavLink>
        <NavLink className="nav" activeClassName="active" to="/mycleaner">
          <FaUsers style={{ padding: "0 20px 0 10px" }} />
          My Cleaners
        </NavLink>
        <NavLink className="nav" activeClassName="active" to="/">
          <FaShoppingCart style={{ padding: "0 20px 0 10px" }} />
          Orders
        </NavLink>
        <NavLink className="nav" activeClassName="active" to="/">
          <FaCogs style={{ padding: "0 20px 0 10px" }} />
          Operations
        </NavLink>
        <NavLink className="nav" activeClassName="active" to="/">
          <FaClock style={{ padding: "0 20px 0 10px" }} />
          Time on site progress
        </NavLink>
        <NavLink className="nav" activeClassName="active" to="/">
          <FaClipboardCheck style={{ padding: "0 20px 0 10px" }} />
          Attendance Summary
        </NavLink>
      </div>
      <div className="copyright">Copy right</div>
    </div>
  );
}

export default Sidebar;
