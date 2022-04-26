import Link from "next/link";
import { useRouter } from "next/router";

import SocialLinks from "./SocialLinks";

import style from "./header.module.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: {
    y: -20,
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

const Header = () => {
  const router = useRouter();

  return (
    <header className="p-4 lg:px-6 fixed top-0 left-0 right-0">
      <ul className="flex flex-row items-center">
        <li className="w-1/2">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="flex"
          >
            <motion.li className="mr-4" variants={listItem}>
              <p
                className={`p-1 text-xs font-roboto font-semibold border-dashed text-white rounded-md ${
                  process.env.NEXT_PUBLIC_ENV_TYPE === "DEV"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {process.env.NEXT_PUBLIC_ENV_TYPE}
              </p>
            </motion.li>
            <motion.li className="mr-4" variants={listItem}>
              <Link href="/">
                <a
                  className={`${style.navLink} ${
                    router.pathname === "/" ? style.activeLink : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </motion.li>
            <motion.li className="mr-4" variants={listItem}>
              <Link href="/about">
                <a
                  className={`${style.navLink} ${
                    router.pathname === "/about" ? style.activeLink : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </motion.li>
            <motion.li className="mr-4" variants={listItem}>
              <Link href="/blogs">
                <a
                  className={`${style.navLink} ${
                    router.pathname.indexOf("/blog") !== -1
                      ? style.activeLink
                      : ""
                  }`}
                >
                  Blogs
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </li>
        <li className="w-1/2 flex">
          <SocialLinks />
        </li>
      </ul>
    </header>
  );
};

export default Header;
