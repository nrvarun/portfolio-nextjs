import Content from "@components/content";
import Lines from "@components/Lines";
import Landing from "@layouts/Landing";

export default function Home() {
  return (
    <Landing>
      <section className="flex flex-col items-center h-full">
        <div className="m-auto">
          {/* <Lines /> */}
          <Content
            heading="VARUN NR"
            subheading="Front-end Developer"
            desc="Bengaluru based frontend Dev with a love for UX and a curious guy fascinated by the endless possibilites of the Web!"
          />
        </div>
      </section>
    </Landing>
  );
}
