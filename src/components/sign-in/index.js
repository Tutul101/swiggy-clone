import React, { useState } from "react";
import FormInput from "../form-input";
import {
  signInWithGooglePopup,
  createUserDocumentFormAuth,
} from "../../utils/firebase/firebase-utils";
import "./sign-in.scss";
import Button from "../button";
const defautlForm = {
  userEmail: "",
  password: "",
};
const SignIn = () => {
  const [formData, setFormData] = useState(defautlForm);
  const { userEmail, password } = formData;

  const googleSignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log("sign in response", response.user);
    const userDocRef = await createUserDocumentFormAuth(response.user);
  };
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    if (userEmail === "" || password === "") {
      alert("Please enter all field before login");
    }
  };
  return (
    <div className="sign-in-wrapper">
      <form className="form-wrapper">
        <FormInput
          label="Email"
          type="text"
          name="userEmail"
          value={userEmail}
          onChange={HandleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={HandleChange}
        />

        <div>
          <Button type="button" name="Login" onButtonClick={handleFormSubmit} />
        </div>

        <div>
          <Button
            type="button"
            name="Sign In using Google"
            onButtonClick={googleSignIn}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
