import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import BookDemoButton from "./book-demo-button";
import ShimmerButton from "../ui/shimmer-button";
import Image from "next/image";

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
      </div>
    </section>
  );
}

export default TestimonialsSection;
