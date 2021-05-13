import Blog from "@components/Blog";
import Landing from "@layouts/Landing";
import { fetchBlogs, useBlogs } from "Hooks/useBlogs";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function Home() {
  const { data, isFetched, isError } = useBlogs();

  return (
    <Landing noFooter>
      <section className="py-40 bg-gray-100 min-h-screen">
        <div className="container m-auto">
          <div className="w-full md:w-1/2 m-auto">
            <h1 className="font-poppins text-center font-black text-6xl text-gray-700 capitalize">
              Blogs.
            </h1>
            <ul className="pt-10 md:pt-20 py-0 lg:w-2/3 m-auto">
              {data != null && data.length > 0 ? (
                data.map(({ id, Title, Description, Date, Tag, Cover }) => (
                  <li
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
                    />
                  </li>
                ))
              ) : (
                <p className="font-poppins text-center font-black text-md md:text-2xl lg:text-3xl text-gray-700 capitalize">
                  Nothing to see in here yet 🙃
                </p>
              )}
            </ul>
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
