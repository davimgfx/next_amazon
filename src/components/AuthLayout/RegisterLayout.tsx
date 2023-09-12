import React, { useState, ChangeEvent, useEffect } from "react";
import { FormInput } from "@/components";
import {
  createAuthUserWithEmailAndPassword,
  loginAuthUserWithEmailAndPassword,
  updateAuthProfile,
} from "@/utils/firebase/firebase";
import { FormFields } from "@/types/types";

const RegisterLayout = () => {
  
  const defaultFormFields = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password, confirmPassword, username } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setFormFields({ ...formFields, [name]: value });
  };

  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password");
      return;
    }

    try {
      await createAuthUserWithEmailAndPassword(email, password);

      await loginAuthUserWithEmailAndPassword(email, password);

      await updateAuthProfile(username);
     
  } catch (error) {
      console.error("Error:", error);
    }
  };

 

  return (
    <form
      onSubmit={handleRegisterUser}
      className="flex justify-center items-center my-20 flex-col">
        <FormInput
        label="Your name"
        type="text"
        required
        name="username"
        value={username}
        onChange={handleChange}
      />
      <FormInput
        label="email"
        type="email"
        required
        name="email"
        value={email}
        onChange={handleChange}
      />
      <FormInput
        label="password"
        type="password"
        required
        name="password"
        value={password}
        onChange={handleChange}
      />
      <FormInput
        label="Confirm password"
        type="password"
        required
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterLayout;
