import React from "react";

const Content = ({ heading = "", subheading = "", desc = "" }) => {
  return (
    <div className="max-w-lg m-auto lg:mx-5">
      <div className="relative mb-4 mb-md-5">
        <h1 className="font-roboto uppercase font-bold text-4xl md:text-6xl lg:text-8xl text-shadow">
          {heading}
        </h1>
        <p className="font-poppins text-sm text-right text-gray-400">
          {subheading}
        </p>
      </div>
      <p className="font-poppins text-1xl text-gray-400">{desc}</p>
    </div>
  );
};

export default Content;
