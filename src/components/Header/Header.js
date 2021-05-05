import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <ul className="flex flex-col items-center justify-center">
        <li>
          <ul className="nav-list">
            <li>
              <Link className="nav-link" activeClassName="active" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" activeClassName="active" href="/about">
                About
              </Link>
            </li>
            <li>
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
        <li>
          <ul className="nav-list">
            <li>
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
