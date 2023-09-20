import React from "react";
import {
  UseFormRegisterReturn,
  FieldErrors,
  FieldValues,
} from "react-hook-form";

interface FormProps {
  label: string;
  type: string;
  placeholder?: string;
  errors?: FieldErrors<FieldValues> | undefined;
  password?: boolean;
  register: UseFormRegisterReturn<string>;
  minLength?: number
}

const FormInput = ({
  label,
  password = false,
  errors,
  placeholder,
  type,
  ...otherProps
}: FormProps) => {
  return (
    <div>
      <label className="font-[600] text-[0.8rem] leading-3">{label}</label>
      <input
        className="border-[#949494] border-[0.1rem] w-full indent-2 rounded-md h-7"
        placeholder={placeholder}
        type={type}
        {...otherProps.register}
      />
     
    </div>
  );
};

export default FormInput;
