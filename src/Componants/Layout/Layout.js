import React from "react";
import "./Layout.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import PRIMARY from "../../Theme/palette";

function Layout({children}) {
  return (
    <div className="layout-wrapper">
      <div className="top-bar">
        <Topbar />
      </div>
      <div className="container-wrapper" style={{backgroundColor:PRIMARY.mediumGray}}>
      <div className="sidebar-wrapper" style={{backgroundColor:PRIMARY.darkestGray}}>
          <Sidebar />
        </div>
        <div className="content-wrapper" style={{backgroundColor:PRIMARY.white}}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
