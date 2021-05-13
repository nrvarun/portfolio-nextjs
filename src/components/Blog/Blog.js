import Tag from "@components/Tag";
import Link from "next/link";

const Blog = ({ id, slug = "", time, title, desc, tags, cover }) => {
  return (
    <Link href={`/blog/${id}`}>
      <a className="no-underline">
        <article>
          <span className="font-roboto text-xs font-300 capitalize text-gray-400">
            {time}
          </span>
          <h2 className="font-poppins font-semibold text-gray text-2xl md:text-3xl lg:text-4xl mb-3">
            {title}
          </h2>
          <p className="font-roboto font-400 text-sm text-gray-500 leading-normal mb-5 md:mb-8">
            {desc}
          </p>
          {tags.length > 0 && (
            <ul className="p-0 flex flex-wrap">
              {tags.map(({ id, Title }) => (
                <li key={id}>
                  <Tag title={Title} />
                </li>
              ))}
            </ul>
          )}
        </article>
      </a>
    </Link>
  );
};

export default Blog;
