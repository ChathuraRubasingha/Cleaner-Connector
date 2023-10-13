import React, { useState } from "react";
import "./Layout.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import PRIMARY from "../../Theme/palette";

function Layout({ children }) {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="layout-wrapper">
      <div className="top-bar">
        <Topbar setIsShow={setIsShow} isShow={isShow} />
      </div>
      <div
        className="container-wrapper"
        style={{ backgroundColor: PRIMARY.mediumGray }}
      >
        <div
          className="sidebar-wrapper"
          style={
            isShow
              ? { display: "none", backgroundColor: PRIMARY.darkestGray }
              : { backgroundColor: PRIMARY.darkestGray }
          }
        >
          <Sidebar />
        </div>
        <div
          className="content-wrapper"
          style={{ backgroundColor: PRIMARY.white }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
