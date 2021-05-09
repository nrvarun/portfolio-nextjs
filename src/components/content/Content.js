import React from "react";

const Content = ({ heading = "", subheading = "", desc = "" }) => {
  return (
    <div className="max-w-md m-auto">
      <div className="relative mb-4 mb-md-5 lg:mx-5">
        <h1 className="font-roboto uppercase font-bold text-4xl md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        <p className="font-lato text-sm text-right text-gray-400 absolute bottom-0 right-0">
          {subheading}
        </p>
      </div>
      <p className="font-lato text-1xl text-gray-400">{desc}</p>
    </div>
  );
};

export default Content;
