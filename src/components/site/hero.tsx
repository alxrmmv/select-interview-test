import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import BookDemoButton from "./book-demo-button";

function Hero() {
  return (
    <section className="container mx-auto relative glow-gradient">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center py-16 relative">
        <div className="flex flex-col items-center justify-center gap-6">
          <Button>Introducing Insights</Button>
          <h1 className="scroll-m-20 text-[4rem] text-center leading-[1.2] font-medium bg-gradient-to-b from-foreground to-[#999EA9] bg-clip-text text-transparent">
            The Snowflake optimization
            <br /> and cost management platform
          </h1>
          <p className="text-center opacity-80 text-xl font-normal max-w-[60%]">
            Gain deep visibility into Snowflake usage, optimize performance and
            automate savings with the click of a button
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <BookDemoButton />
            <Button
              variant="link"
              className="text-primary-foreground gap-2 text-base"
            >
              <span>Start Free Trial</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>;
