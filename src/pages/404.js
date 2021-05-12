import Landing from "@layouts/Landing";
import Link from "next/link";
import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Landing>
      <section className="flex flex-col items-center h-full">
        <div className="container m-auto">
          <div className="relative m-auto w-1/2">
            <h2 className="section-heading -mt-10 z-0 pointer-events-none">
              404
            </h2>
            <div className="w-full z-10 text-center">
              <h4 className="mb-4 text-1xl font-roboto">
                I Think you have lost your way, maybe try going back
              </h4>
              <button
                onClick={goBack}
                className="cursor-pointer font-roboto text-1xl px-3 py-2 rounded mb-2 bg-gray-600 text-white"
              >
                <p className="text-dark font-roboto text-white text-sm">
                  Go Back!
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Landing>
  );
};

export default about;
