import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Dan Corcoran",
    title: "Senior Data Engineering Manager, Gopuff",
    body: "SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions.",
    img: "/avatars/dan-corcoran.jpeg",
  },
  {
    name: "Dan Corcoran",
    title: "Senior Data Engineering Manager, Gopuff",
    body: "SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions.",
    img: "/avatars/dan-corcoran.jpeg",
  },
  {
    name: "Dan Corcoran",
    title: "Senior Data Engineering Manager, Gopuff",
    body: "SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions.",
    img: "/avatars/dan-corcoran.jpeg",
  },
  {
    name: "Dan Corcoran",
    title: "Senior Data Engineering Manager, Gopuff",
    body: "SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions.",
    img: "/avatars/dan-corcoran.jpeg",
  },
  {
    name: "Dan Corcoran",
    title: "Senior Data Engineering Manager, Gopuff",
    body: "SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions.",
    img: "/avatars/dan-corcoran.jpeg",
  },
  {
    name: "Dan Corcoran",
    title: "Senior Data Engineering Manager, Gopuff",
    body: "SELECT is a team favorite - its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions.",
    img: "/avatars/dan-corcoran.jpeg",
  },
];

const firstRow = reviews.slice(0, 2);
const secondRow = reviews.slice(2, 4);
const thirdRow = reviews.slice(4, 6);

const TestimonialCard = ({
  img,
  name,
  title,
  body,
}: {
  img: string;
  name: string;
  title: string;
  body: string;
}) => {
  return (
    <figure className="flex flex-col py-6 px-8 gap-6 bg-card border-[1px] border-[#1C1D29] rounded-xl shadow-[0px_0px_0px_1px_#000000,_0px_0px_10px_rgba(0,_0,_0,_0.7)]">
      <blockquote className="text-base font-normal">{`“${body}“`}</blockquote>
      <div className="flex flex-row items-center gap-4">
        <Image
          className="rounded-full"
          width="56"
          height="56"
          alt={`Avatar of ${name}`}
          src={img}
        />
        <figcaption className="flex flex-col gap-0.5">
          <p className="text-[0.9375rem] font-semibold ">{name}</p>
          <p className="text-[0.8125rem] font-normal">{title}</p>
        </figcaption>
      </div>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-lg p-0 gap-6">
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s] p-0 gap-6"
      >
        {firstRow.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s] p-0 gap-6">
        {secondRow.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s] p-0 [--gap:1.5rem]"
      >
        {thirdRow.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </Marquee>
      {/* Top and bottom gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
