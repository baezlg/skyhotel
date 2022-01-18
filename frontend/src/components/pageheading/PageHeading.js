import React, { Children } from "react";
import "./PageHeading.scss";

const PageHeading = ({ children, img }) => {
  return (
    <div className="pageheading">
      {children}
      <div className="pageheading__overlay"></div>
      <img src={img} alt="image" />
    </div>
  );
};

export default PageHeading;
