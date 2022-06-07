import React from "react";

const Input = ({ placeholder, name, handleChange, type, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => handleChange(e, name)}
      value={value}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transpaent text-white border-none text-sm white-glassmorphism"
    />
  );
};

export default Input;
