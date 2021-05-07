import Landing from "@layouts/Landing";

const about = () => {
  return (
    <Landing>
      <section className="flex flex-col items-center h-full">
        <div className="relative m-auto w-1/2">
          <h2 className="section-heading -mt-10">About</h2>
          <div className="w-full z-10">
            <h4 className="mb-4 text-2xl font-roboto">
              Hi, i am varun a Front-end enginner with passion for the web and
              its infinite possibilites.
            </h4>
            <p className="text-dark mb-2 font-roboto text-gray-600">
              I ❤️ tinkering with new technologies and 🔨 together projects just
              to explore the possibilites of those 👨‍💻. My love for the 🕸 started
              while i was in college and now am obsessive about making things
              look great and the also having them load in blazing fast speed.
            </p>
          </div>
        </div>
      </section>
    </Landing>
  );
};

export default about;
