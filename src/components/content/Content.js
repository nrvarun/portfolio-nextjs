import React from "react";

const Content = ({ heading = "", subheading = "", desc = "" }) => {
  return (
    <div className="content">
      <div className="position-relative mb-4 mb-md-5">
        <h1 className="content__heading">{heading}</h1>
        <p className="content__subheading">{subheading}</p>
      </div>
      <p className="content__desc">{desc}</p>
    </div>
  );
};

export default Content;
