import React from "react";
import "./Layout.css";
import { FaBuilding, FaClipboardCheck, FaClock, FaCogs, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="navigation">
        <div className="nav">
          <FaUser style={{ padding: "0 20px 0 10px" }} />
          My Profile
        </div>
        <div className="nav">
          <FaBuilding style={{ padding: "0 20px 0 10px" }} /> My Clients & Sites
        </div>
        <div className="nav">
          <FaUsers style={{ padding: "0 20px 0 10px" }} />
          My Cleaners
        </div>
        <div className="nav">
          <FaShoppingCart style={{ padding: "0 20px 0 10px" }} />
          Orders
        </div>
        <div className="nav">
          <FaCogs style={{ padding: "0 20px 0 10px" }} />
          Operations
        </div>
        <div className="nav">
          <FaClock style={{ padding: "0 20px 0 10px" }} />
          Time on site progress
        </div>
        <div className="nav">
          <FaClipboardCheck style={{ padding: "0 20px 0 10px" }} />
          Attendance Summary
        </div>
      </div>
      <div className="copyright">Copy right</div>
    </div>
  );
}

export default Sidebar;
