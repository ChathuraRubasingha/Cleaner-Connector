import React, { useState } from "react";
import "./ChangedPassword.css";
import { FaEye, FaEyeSlash} from "react-icons/fa";

function ChangedPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSave = () => {
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match");
    } else if (oldPassword === "" || newPassword === "") {
      setError("All fields are required");
    } else {
      // Perform your password change logic here
      setError("");
      // Clear input fields or perform other actions
    }
  };

  return (
    <div className="container">
    <div>
     <h2 className="pw-title">Changed Password Here</h2> 
    </div>
      <div className="input-group">
        <label htmlFor="oldPassword">Old Password</label>
        <input
          type={passwordVisible ? "text" : "password"}
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        {oldPassword ? (
          <span
            className="password-toggle-icon-login"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="input-group">
        <label htmlFor="newPassword">New Password</label>
        <input
         type={newPasswordVisible ? "text" : "password"}
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
         {newPassword ? (
          <span
            className="password-toggle-icon-login"
            onClick={() => setNewPasswordVisible(!newPasswordVisible)}
          >
            {newPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="input-group">
        <label htmlFor="confirmNewPassword">Confirm New Password</label>
        <input
         type={confirmPasswordVisible ? "text" : "password"}
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        {confirmNewPassword ? (
          <span
            className="password-toggle-icon-login"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        ) : (
          ""
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      <button className="btn-save" onClick={handleSave}>
        Reset Password
      </button>
    </div>
  );
}

export default ChangedPassword;
