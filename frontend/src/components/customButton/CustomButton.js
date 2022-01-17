import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, days, otherProps }) => {
  return (
    <button className="btn" disabled={days < 1} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
