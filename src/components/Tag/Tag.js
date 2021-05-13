import React from "react";

const Tag = ({ title }) => {
  return (
    <p
      className="font-roboto font-semibold text-gray-400 border-gray-400 p-1 px-3 rounded mr-3"
      style={{ border: "1px solid #d2d2d2" }}
    >
      #<span className="text-gray-700">{title}</span>
    </p>
  );
};

export default Tag;
