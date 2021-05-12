import Blog from "@components/Blog";
import Content from "@components/content";
import Landing from "@layouts/Landing";
import { fetchLandingPage, useLandingPage } from "Hooks";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function Home() {
  const { data, isFetched, isError } = useLandingPage();
  const { Heading = "", SubHeading = "", Description = "" } = data;

  return (
    <Landing noFooter>
      <section className="py-20 md:py-40 bg-gray-100">
        <div className="container m-auto">
          <div className="w-full md:w-1/2 m-auto">
            <h1 className="font-lato text-center font-black text-6xl text-gray-700 capitalize">
              blogs
            </h1>
            <ul className="pt-20 py-0 lg:w-2/3 m-auto">
              <li className="mb-10 pb-10 border-b-2 border-gray-200">
                <Blog />
              </li>
              <li className="mb-10 pb-10 border-b-2 border-gray-200">
                <Blog />
              </li>
              <li className="mb-10 pb-10 border-b-2 border-gray-200">
                <Blog />
              </li>
              <li className="mb-10 pb-10 border-b-2 border-gray-200">
                <Blog />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Landing>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("landing", fetchLandingPage);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
