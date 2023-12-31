import React from "react";
import { useId } from "@react-aria/utils";

const Checkbox = ({ label }) => {
  const checkboxId = useId();

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={checkboxId}
        className="form-checkbox h-5 w-5 text-[#2B59C3]"
      />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default Checkbox;
