import Content from "@components/content";
import Landing from "@layouts/Landing";
import { fetchLandingPage, useLandingPage } from "Hooks";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function Home() {
  const { data, isFetched, isError } = useLandingPage();
  console.log(useLandingPage());
  const { Heading = "", SubHeading = "", Description = "" } = data;

  return (
    <Landing>
      <section className="flex flex-col items-center h-screen">
        <div className="m-auto">
          <div className="container m-auto">
            {isError ? (
              <p>Error fetching Data</p>
            ) : (
              <Content
                heading={Heading}
                subheading={SubHeading}
                desc={Description}
              />
            )}
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
