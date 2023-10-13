import React, {useEffect,useState} from "react";
import logo from "../../Assets/white_icon_transparent_background.png"
import "./Topbar.css"

function Topbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="topbar">
      <div className="left-content">
        <img src={logo} alt="Logo" className="logo" style={{width:"25px", height:"25px"}} />
        <div className="text">Service Provider Portal</div>
      </div>
      <div className="right-content">
      <div className="date-time">
      {currentTime.toLocaleString()}
    </div>
        <div className="user-info">John Doe</div>
      </div>
    </div>
  );
}

export default Topbar;
