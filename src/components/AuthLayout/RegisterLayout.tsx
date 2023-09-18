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

      window.location.href = "./";

      console.log("Account created sucessfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleRegisterUser}
      className="flex flex-start flex-col gap-2 mt-5">
      <FormInput
        label="Your name"
        type="text"
        required
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="First name"
      />
      <FormInput
        label="Email"
        type="email"
        required
        name="email"
        value={email}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        type="password"
        required
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="At least 6 characters"
        password={true}
        minLength={6}
      />
      <FormInput
        label="Re-enter password"
        type="password"
        required
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        minLength={6}
      />
      <button
        type="submit"
        className="py-[0.2rem] px-[0.6rem] w-auto my-2 bg-amazon_yellow_light rounded-xl font-[400]">
        Register
      </button>
    </form>
  );
};

export default RegisterLayout;
