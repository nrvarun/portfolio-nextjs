import Content from "@components/content";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Lines from "@components/Lines";

const Landing = () => {
  return (
    <section className="section section--home">
      <Lines />
      <Header />
      <main>
        <Content
          heading="VARUN NR"
          subheading="Front-end Developer"
          desc="Bengaluru based frontend Dev with a love for UX and a curious guy fascinated by the endless possibilites of the Web!"
        />
      </main>
      <Footer />
    </section>
  );
};

export default Landing;
