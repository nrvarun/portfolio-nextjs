import Link from "next/link";
import { useRouter } from "next/router";

import SocialLinks from "./SocialLinks";

import style from "./header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className="px-4 py-2 fixed top-0 left-0 right-0">
      <ul className="flex flex-row items-center">
        <li className="w-1/2">
          <ul className="flex">
            <li className="mr-4">
              <Link href="/">
                <a
                  className={`${style.navLink} ${
                    router.pathname === "/" ? style.activeLink : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/about">
                <a
                  className={`${style.navLink} ${
                    router.pathname === "/about" ? style.activeLink : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/projects">
                <a
                  className={`${style.navLink} ${
                    router.pathname === "/projects" ? style.activeLink : ""
                  }`}
                >
                  Projects
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="w-1/2 flex">
          <SocialLinks />
        </li>
      </ul>
    </header>
  );
};

export default Header;
