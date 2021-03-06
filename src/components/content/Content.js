import { motion } from "framer-motion";
import { fadeOut, fadeOutReverse, fadeOutRight } from "Libs/animations";

const Content = ({ heading = "", subheading = "", desc = "" }) => {
  return (
    <div className="w-5/6 lg:w-full md:max-w-lg xl:max-w-xl m-auto lg:mx-5">
      <div className="relative mb-4 mb-md-5">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeOut}
          className="font-roboto uppercase font-bold text-4xl md:text-6xl lg:text-8xl text-shadow"
        >
          {heading}
        </motion.h1>
        <motion.p
          variants={fadeOutRight}
          initial="hidden"
          animate="show"
          className="font-poppins text-sm md:text-right text-gray-400"
        >
          {subheading}
        </motion.p>
      </div>
      <motion.p
        variants={fadeOutReverse}
        initial="hidden"
        animate="show"
        className="font-poppins mr-10 text-1xl text-gray-400"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Content;
