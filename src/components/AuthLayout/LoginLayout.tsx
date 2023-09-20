import React from "react";
import { FormInput } from "@/components";
import { loginAuthUserWithEmailAndPassword } from "@/utils/firebase/firebase";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";

const LoginLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    try {
      await loginAuthUserWithEmailAndPassword(data.email, data.password);
      window.location.href = "./";
      console.log("Login");
    } catch (error) {
      console.log("error");
    }

    reset();
  };

  return (
    <form
      className="flex flex-start flex-col gap-2 mt-5"
      onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Email"
        type="email"
        register={{
          ...register("email", {
            required: "Email is required",
            minLength: {
              value: 3,
              message: "Email must be at least 3 characters",
            },
          }),
        }}
        errors={errors}
      />
      <FormInput
        label="Password"
        type="password"
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
      <button
        type="submit"
        className="py-[0.2rem] px-[0.6rem] w-auto my-2 bg-amazon_yellow_light rounded-xl font-[400]"
        disabled={isSubmitting}>
        Login
      </button>
    </form>
  );
};

export default LoginLayout;
