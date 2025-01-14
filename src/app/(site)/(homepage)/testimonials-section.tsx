import { Testimonials } from "../../../components/site/testimonials";

function TestimonialsSection() {
  return (
    <section className="container mx-auto px-24 py-28">
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-xs font-medium text-sky-400 uppercase">
            Testimonials
          </p>
          <h2 className="text-5xl font-medium text-center leading-[1.3]">
            Supercharging thousands
            <br />
            of Snowflake users
          </h2>
        </div>
        <Testimonials />
      </div>
    </section>
  );
}

export default TestimonialsSection;
