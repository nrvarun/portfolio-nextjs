import React from "react";

const Blog = () => {
  return (
    <article>
      <span className="font-lato text-xs capitalize text-gray-400">
        15 Jan 2021
      </span>
      <h2 className="font-roboto font-semibold text-gray text-2xl md:text-3xl lg:text-4xl">
        Tailwind is promising!
      </h2>
      <p className="font-lato text-sm text-gray-700 leading-1">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
    </article>
  );
};

export default Blog;
