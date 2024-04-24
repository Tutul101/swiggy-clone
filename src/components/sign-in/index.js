import React from "react";
import FormInput from "../form-input";

import "./sign-in.scss";
import Button from "../button";

const SignIn = () => {
  return (
    <div className="sign-in-wrapper">
      <form className="form-wrapper">
        <FormInput label="User Name" type="text" />
        <FormInput label="Password" type="password" />

        <div>
          <Button type="button" name="Login" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
