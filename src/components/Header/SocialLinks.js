import { motion } from "framer-motion";
import { useSocialLinks } from "Hooks";

import style from "./header.module.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const SocialLinks = () => {
  const { data } = useSocialLinks();

  return (
    <>
      {data != null && data.length > 0 && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex ml-auto"
        >
          {data.map((item) => (
            <motion.li className="mr-4" variants={listItem} key={item.id}>
              <a
                className={style.navLink}
                href={item?.Url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.Title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default SocialLinks;
