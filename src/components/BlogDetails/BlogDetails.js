import MarkDownRenderer from "@components/MarkdownRenderer";
import { motion } from "framer-motion";
import style from "./blogdetails.module.scss";

import { useRouter } from "next/router";
import { fadeOut } from "Libs/animations";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

const MARKDOWN_RENDERERS = {
  h2: ({ node, ...props }) => (
    <h2
      className="font-poppins font-semibold mb-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl capitalize"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3
      className="font-poppins font-semibold mb-2 text-gray-900 text-1xl md:text-2xl lg:text-4xl capitalize"
      {...props}
    />
  ),
  h4: ({ node, ...props }) => (
    <h4
      className="font-poppins font-semibold mb-2 text-gray-900 text-xl md:text-1xl lg:text-4xl capitalize"
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <p className="font-roboto text-md text-gray-800" {...props} />
  ),
  //This custom renderer changes how images are rendered
  img: ({ node, ...props }) => (
    <img
      alt={props.alt}
      title={props.title}
      className="w-auto h-auto my-10 md:my-20"
      src={`${props.src}`}
    />
  ),
};

const BlogDetails = ({ blog }) => {
  const router = useRouter();

  const {
    Title = "",
    Description = "",
    Date = "xx/xx/xxxx",
    Content,
    Tag,
    Cover,
  } = blog;

  return (
    <section className="py-32 md:py-40 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center w-5/6 sm:w-3/4 xl:w-2/4 mx-auto relative">
          <Link href={"/blogs"}>
            <button className="border-none outline-none font-poppins font-semibold text-sm text-gray opacity-40 hover:opacity-100 absolute left-0 top-0 transition-opacity flex align-center justify-items-center">
              👈
              <span className="ml-1 mt-0.5"> Back to Blogs</span>
            </button>
          </Link>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeOut}
            className="mx-5 md:mx-10 xl:mx-0 xl:pt-10"
          >
            <p className="font-roboto text-xs text-gray-400 mb-2">
              {dayjs().to(Date)}
            </p>
            <h2 className="font-poppins font-semibold text-gray text-2xl md:text-3xl lg:text-5xl lg:leading-normal mb-3 md:mb-8">
              {Title}
            </h2>
            <p className="font-roboto font-400 text-sm text-gray-500 leading-normal mb-5 md:mb-8 w-3/4 mx-auto">
              {Description}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeOut}
          className="w-full md:w-5/6 xl:w-2/3 mx-auto py-10 md:py-20"
        >
          <img src={Cover?.url} alt="" className="h-auto w-full object-cover" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeOut}
          className="w-3/4 md:w-2/3 xl:w-2/4 mx-auto py-10 md:pb-20"
        >
          <MarkDownRenderer
            content={Content}
            classList={style.content}
            components={MARKDOWN_RENDERERS}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetails;
