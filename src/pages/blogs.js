import Blog from "@components/Blog";
import Landing from "@layouts/Landing";
import { motion } from "framer-motion";
import { fetchBlogs, useBlogs } from "Hooks/useBlogs";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

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
    y: -10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Home() {
  const { data, isFetched, isError } = useBlogs();

  return (
    <Landing noFooter>
      <section className="py-40 bg-gray-100 min-h-screen">
        <div className="container m-auto">
          <div className="w-3/4 md:w-2/3 lg:w-2/4 m-auto">
            <h1 className="font-poppins text-center font-black text-4xl md:text-5xl lg:tex-6xl text-gray-700 capitalize">
              Blogs.
            </h1>
            {data != null && data.length > 0 ? (
              <motion.ul
                className="pt-10 md:pt-20 py-0 xl:w-3/4 m-auto"
                initial="hidden"
                animate="show"
                variants={container}
              >
                {data.map(
                  ({ id, slug, Title, Description, Date, Tag, Cover }) => (
                    <motion.li
                      initial="hidden"
                      animate="show"
                      variants={listItem}
                      className="mb-10 pb-10 border-b-2 border-gray-200"
                      key={id}
                    >
                      <Blog
                        id={id}
                        time={Date}
                        title={Title}
                        desc={Description}
                        tags={Tag}
                        cover={Cover}
                        slug={slug}
                      />
                    </motion.li>
                  )
                )}
              </motion.ul>
            ) : (
              <p className="font-poppins text-center font-black text-md md:text-2xl lg:text-3xl text-gray-700 capitalize">
                Nothing to see in here yet 🙃
              </p>
            )}
          </div>
        </div>
      </section>
    </Landing>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("blogs", fetchBlogs);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
