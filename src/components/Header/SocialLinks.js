import { useSocialLinks } from "Hooks";

import style from "./header.module.scss";

const SocialLinks = () => {
  const { data } = useSocialLinks();

  return (
    <ul className="flex ml-auto">
      {data != null &&
        data.map((item) => (
          <li className="mr-4" key={item.id}>
            <a
              className={style.navLink}
              href={item?.Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item?.Title}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default SocialLinks;
