import React from "react";
import FormInput from "../form-input";
import Button from "../button";

import "./sign-up.scss";
const SignUp = () => {
  return (
    <div className="sign-in-wrapper">
      <form className="form-wrapper">
        <FormInput label="User Name" type="text" />
        <FormInput label="User Email" type="text" />
        <FormInput label="Password" type="password" />
        <FormInput label="Confirm Password" type="password" />

        <div>
          <Button type="button" name="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
