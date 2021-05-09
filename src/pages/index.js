import Content from "@components/content";
import Landing from "@layouts/Landing";
import { fetchLandingPage, useLandingPage } from "Hooks";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function Home() {
  const { data, isFetched, isError } = useLandingPage();
  const { Heading = "", SubHeading = "", Description = "" } = data;

  return (
    <Landing>
      <section className="flex flex-col items-center h-full">
        <div className="m-auto">
          {/* <Lines /> */}
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
