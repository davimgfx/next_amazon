import React from 'react'

interface FormProps {
    label: string,
    type: string,
    required: boolean,
    name: string,
    value: string,
    onChange: (event: any) => void;
}

const FormInput = ({label, ...otherProps} : FormProps) => {
  return (
    <>
      <label>{label}</label>
      <input className="border-black border-[0.2rem] w-[15rem]"
        {...otherProps}
        
      />
    </>
  )
}

export default FormInput