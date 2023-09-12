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
     console.log("wrond")
      return;
    }

    try {
      await loginAuthUserWithEmailAndPassword(email, password);
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
        <form className="flex justify-center items-center my-20 flex-col" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
       
   
  );
};

export default LoginLayout;
