import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";
import Card from "./Card";

const reviews = [
  {
    title:
      "I've never seen anything like this before. It's amazing. I love it.",
    icon: "https://avatar.vercel.sh/jack",
  },
  {
    title: "I don't know what to say. I'm speechless. This is amazing.",
    icon: "https://avatar.vercel.sh/jill",
  },
  {
    title: "I'm at a loss for words. This is amazing. I love it.",
    icon: "https://avatar.vercel.sh/john",
  },
  {
    title: "The best solution I've ever seen. Absolutely fantastic!",
    icon: "https://avatar.vercel.sh/sarah",
  },
  {
    title: "Game-changing platform. Can't imagine work without it.",
    icon: "https://avatar.vercel.sh/mike",
  },
  {
    title: "Revolutionary approach to solving our daily challenges.",
    icon: "https://avatar.vercel.sh/emma",
  },
];

// Split reviews into three columns
const columnSize = Math.ceil(reviews.length / 3);
const firstColumn = reviews.slice(0, columnSize);
const secondColumn = reviews.slice(columnSize, columnSize * 2);
const thirdColumn = reviews.slice(columnSize * 2);

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstColumn.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
        {secondColumn.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {thirdColumn.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
    </div>
  );
}
