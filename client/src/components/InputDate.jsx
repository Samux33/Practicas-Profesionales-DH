import { useState } from "react";
import InputForm from "./InputForm";

const DateInput = ({ name, placeholder,error}) => {
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  return (
    <InputForm
      type={inputType}
      onFocus={handleFocus}
      onBlur={handleBlur}
      name={name}
      placeholder={placeholder}
      error={error}
    />
  );
};

export default DateInput;
