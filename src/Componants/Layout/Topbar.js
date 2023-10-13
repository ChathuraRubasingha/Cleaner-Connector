import React, { useEffect, useState } from "react";
import "./Topbar.css";
import PRIMARY from "../../Theme/palette";
import { FaBars, FaHamburger } from "react-icons/fa";

function Topbar(props) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isshow, setIsshow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 660) {
        setIsshow(true);
        props.setIsShow(true);
      } else {
        setIsshow(false);
        props.setIsShow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ToggleSideBar = () => {
    props.setIsShow(!props.isShow);
  };

  return (
    <div
      className="topbar"
      style={{ backgroundColor: PRIMARY.black, color: PRIMARY.white }}
    >
      <div className="left-content">
        {isshow && (
          <FaBars style={{ cursor: "pointer" }} onClick={ToggleSideBar} />
        )}
        {/* <img src="/path/to/your/logo.png" alt="Logo" className="logo" /> */}
        <div className="text">Service Provider Portal</div>
      </div>
      <div className="right-content">
        <div className="date-time">{currentTime.toLocaleString()}</div>
        <div className="user-info">John Doe</div>
      </div>
    </div>
  );
}

export default Topbar;
