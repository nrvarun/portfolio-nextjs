import Landing from "@layouts/Landing";
import { motion } from "framer-motion";
import { fetchAboutPage, useAboutPage } from "Hooks/useAboutPage";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const fadeOut = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeOutReverse = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  const { data } = useAboutPage();

  return (
    <Landing>
      <section className="flex flex-col items-center h-full">
        <div className="container m-auto">
          <div className="relative m-auto w-3/4 md:w-2/4 xl:w-1/3">
            <motion.div initial="hidden" animate="show" variants={fadeOut}>
              <h2 className="section-heading -mt-32 sm:-mt-16 md:-mt-24 lg:-mt-10 pointer-events-none">
                {data?.Heading}
              </h2>
            </motion.div>
            <motion.div
              className="w-full z-10"
              initial="hidden"
              animate="show"
              variants={fadeOutReverse}
            >
              <h4 className="mb-4 text-xl md:text-2xl font-roboto">
                {data?.Title}
              </h4>
              <p className="text-dark text-sm md:text-md mb-2 font-roboto text-gray-600">
                {data?.Description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Landing>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("about", fetchAboutPage);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default About;
