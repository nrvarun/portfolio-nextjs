import Landing from "@layouts/Landing";
import { useAboutPage } from "Hooks/useAboutPage";

const about = () => {
  const { data } = useAboutPage();

  return (
    <Landing>
      <section className="flex flex-col items-center h-full">
        <div className="container m-auto">
          <div className="relative m-auto w-1/2 lg:w-1/3">
            <h2 className="section-heading -mt-10 pointer-events-none">
              {data?.Heading}
            </h2>
            <div className="w-full z-10">
              <h4 className="mb-4 text-2xl font-roboto">{data?.Title}</h4>
              <p className="text-dark mb-2 font-roboto text-gray-600">
                {data?.Description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Landing>
  );
};

export default about;
