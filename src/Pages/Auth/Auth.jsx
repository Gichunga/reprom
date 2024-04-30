import React, { useState } from "react";
import "./Auth.css";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const togglePanel = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="flex justify-center h-screen overflow-hidden items-center">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegistered ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Success is built upon well organized projects
              </span>
              <span className="text-2 text-xs">Lets Get Connected</span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">
              <Signin togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <Signup togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
