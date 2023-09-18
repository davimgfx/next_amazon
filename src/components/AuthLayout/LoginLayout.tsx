import React, { useState, ChangeEvent } from "react";
import { FormInput } from "@/components";
import { loginAuthUserWithEmailAndPassword } from "@/utils/firebase/firebase"

const LoginLayout = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  interface FormFields {
    email: string;
    password: string;
  }
  
  const handleSubmit = async (event : any) => {
    event.preventDefault();
    if (!password || !email) {
     console.log("wrong")
      return;
    }

    try {
      await loginAuthUserWithEmailAndPassword(email, password);
      window.location.href = "./";
      console.log("Logado")
    } catch (error) {
      console.log("error")
    }
};

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
        <form className="flex flex-start flex-col gap-2 mt-5" onSubmit={handleSubmit}>
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
          />
          <button type="submit" className="py-[0.2rem] px-[0.6rem] w-auto my-2 bg-amazon_yellow_light rounded-xl font-[400]">Login</button>
        </form>
       
   
  );
};

export default LoginLayout;
