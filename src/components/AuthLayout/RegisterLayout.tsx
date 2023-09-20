import React from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { FormInput } from "..";
import {
  createAuthUserWithEmailAndPassword,
  loginAuthUserWithEmailAndPassword,
  updateAuthProfile,
} from "@/utils/firebase/firebase";

const RegisterLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      await createAuthUserWithEmailAndPassword(data.email, data.password);

      await loginAuthUserWithEmailAndPassword(data.email, data.password);

      await updateAuthProfile(data.username);

      window.location.href = "./";

      console.log("Account created sucessfully");
    } catch (error) {
      console.error("Error:", error);
    }

    reset();
  };

  return (
    <form
      className="flex flex-start flex-col gap-2 mt-5"
      onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Your name"
        type="text"
        placeholder="First name"
        register={{
          ...register("username", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Username must be at least 2 characters"
            }
          }),
        }}
        errors={errors}
      />
      <FormInput
        label="Email"
        type="email"
        register={{
          ...register("email", {
            required: "Email is required",
            minLength: {
              value: 3,
              message: "Email must be at least 3 characters"
            }
          }),
        }}
        errors={errors}
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="At least 6 characters"
        password={true}
        register={{
          ...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }),
        }}
        errors={errors}
      />
      <FormInput
        label="Re-enter password"
        type="password"
        register={{
          ...register("confirmPassword", {
            required: "Please confirm your password",
            minLength: {
              value: 6,
              message: "Passwords need to be the same",
            },
            validate: (value) =>
            value === getValues("password") || "Passwords must match",
          }),
        }}
        errors={errors}
      />
      <button
        type="submit"
        className="py-[0.2rem] px-[0.6rem] w-auto my-2 bg-amazon_yellow_light rounded-xl font-[400]"
        disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
};

export default RegisterLayout;
