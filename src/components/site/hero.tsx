import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import BookDemoButton from "./book-demo-button";
import ShimmerButton from "../ui/shimmer-button";
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
        className="transform -translate-y-[40px]"
      />
    </section>
  );
}

export default Hero;

// /* Button */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 5px 14px;
// gap: 8px;

// width: 190.5px;
// height: 31px;

// /* Card Fill */
// background: radial-gradient(88.41% 100% at 49.87% 0%, #3B3F5A 0%, #18182B 57.5%);
// box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.7), inset 0px 1px 0px rgba(255, 255, 255, 0.1);
// backdrop-filter: blur(7.5px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 100px;
