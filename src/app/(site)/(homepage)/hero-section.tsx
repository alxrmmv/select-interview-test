import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import BookDemoButton from "@/components/site/book-demo-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";

function Hero() {
  return (
    <section className="container mx-auto px-24">
      <div className="relative glow-gradient">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center py-20 relative">
          <div className="flex flex-col items-center justify-center gap-6">
            <ShimmerButton className="gap-1.5">
              <Image
                src="/icon-stars.svg"
                alt="Insights"
                width={14}
                height={14}
              />
              <span>Introducing Insights</span>
              <ChevronRightIcon className="w-4 h-4" />
            </ShimmerButton>
            <h1 className="scroll-m-20 text-[4rem] text-center leading-[1.2] font-medium bg-gradient-to-b from-foreground to-[#999EA9] bg-clip-text text-transparent">
              The Snowflake optimization
              <br /> and cost management platform
            </h1>
            <p className="text-center opacity-80 text-xl font-normal max-w-[60%]">
              Gain deep visibility into Snowflake usage, optimize performance
              and automate savings with the click of a button
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
      </div>
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        width={1800}
        height={1800}
        className="transform -translate-y-[5%]"
      />
    </section>
  );
}

export default Hero;
