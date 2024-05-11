import React, { useState } from "react";
import FormInput from "../form-input";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import {
  signInWithGooglePopup,
  createUserDocumentFormAuth,
  signInAuthUserWithEmailAndPassword,
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
  const dispatch = useDispatch();

  const googleSignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log("sign in response", response.user);
    const userDocRef = await createUserDocumentFormAuth(response.user);
    console.log("userDocRef", userDocRef);
    dispatch(userActions.setUserLogin(response.user));
  };
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    if (userEmail === "" || password === "") {
      alert("Please enter all field before login");
    } else {
      const response = await signInAuthUserWithEmailAndPassword(
        userEmail,
        password
      );
      console.log("form sign in response", response);
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
