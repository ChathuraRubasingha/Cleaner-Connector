import React from "react";
import "./Layout.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

function Layout({children}) {
  return (
    <div className="layout-wrapper">
      <div className="top-bar">
        <Topbar />
      </div>
      <div className="container-wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
