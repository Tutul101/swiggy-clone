import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input";
import Button from "../button";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFormAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase-utils";

import { userActions } from "../../store/userSlice";
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

  const dispatch = useDispatch();
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormFields = () => {
    setFormData(defautlForm);
  };
  const handleFormSubmit = async () => {
    if (
      userName === "" ||
      userEmail === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please enter all the fields before sign-up");
    } else if (password !== confirmPassword) {
      alert("Passwords do not matched");
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          userEmail,
          password
        );
        console.log("userDoc", user);

        const userDocRef = await createUserDocumentFormAuth(user, {
          displayName: userName,
        });
        dispatch(userActions.setUserLogin(userDocRef));
        resetFormFields();
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          alert("Cannot create user email already in use");
        }
        console.log("User creation encounterd an error", err);
      }
    }
  };
  const googleSignUp = async () => {
    const response = await signInWithGooglePopup();
    console.log("sign in response", response.user);
    const userDocRef = await createUserDocumentFormAuth(response.user);
    dispatch(userActions.setUserLogin(userDocRef.user));
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
          name="password"
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

        <div>
          <Button
            type="button"
            name="Sign Up With Google"
            onButtonClick={googleSignUp}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
