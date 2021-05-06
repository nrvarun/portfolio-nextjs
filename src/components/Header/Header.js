import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 py-2 fixed top-0 left-0 right-0">
      <ul className="flex flex-row items-center">
        <li className="w-1/2">
          <ul className="flex">
            <li className="mr-4">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-4">
              <Link
                className="nav-link"
                activeClassName="active"
                href="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </li>
        <li className="w-1/2 flex">
          <ul className="flex ml-auto">
            <li className="mr-4">
              <a
                className="nav-link"
                href="https://github.com/nrvarun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/varunnr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
