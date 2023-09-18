import React from "react";

interface FormProps {
  label: string;
  type: string;
  required: boolean;
  name: string;
  value: string;
  placeholder?: string;
  password?: boolean;
  minLength?: number,
  onChange: (event: any) => void;
}

const FormInput = ({ label, password = false, ...otherProps }: FormProps) => {
  return (
    <div>
      <label className="font-[600] text-[0.8rem] leading-3">{label}</label>
      <input
        className="border-[#949494] border-[0.1rem] w-full indent-2 rounded-md h-7"
        {...otherProps}
      />
      {password ? (
        <div className="flex gap-2 items-center">
          <h2 className="text-[0.8rem]">
            Password must be at least 6 characters
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;
