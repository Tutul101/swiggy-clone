import React, { useState } from "react";
import FormInput from "../form-input";
import Button from "../button";

import "./sign-up.scss";

const defautlForm = {
  userName: "",
  userEmail: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formData, setFormData] = useState(defautlForm);
  const { userName, userEmail, password, confirmPassword } = formData;

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    if (
      userName === "" ||
      userEmail === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please enter all the fields before sign-up");
    }
  };
  return (
    <div className="sign-in-wrapper">
      <form className="form-wrapper">
        <FormInput
          label="User Name"
          type="text"
          name="userName"
          value={userName}
          onChange={HandleChange}
        />
        <FormInput
          label="User Email"
          type="text"
          name="userEmail"
          value={userEmail}
          onChange={HandleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="passwords"
          value={password}
          onChange={HandleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={HandleChange}
        />

        <div>
          <Button
            type="button"
            name="Sign Up"
            onButtonClick={handleFormSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
