import React, { useState } from "react";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

import "./login.scss";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onLoginModeChange = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <div className="login-wrapper">
      <div className="auth-header">
        <div className="auth-title-wrapper">
          <div className="auth-title">{isLogin ? `Login` : "Sign Up"}</div>
          <div className="auth-sub-title">
            or
            <span onClick={onLoginModeChange}>
              {isLogin ? "create an account" : "login to your account"}
            </span>
          </div>
        </div>
        <div className="auth-image-wrapper">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="roll image"
          />
        </div>
      </div>
      <SignIn />
    </div>
  );
};

export default LoginPage;
