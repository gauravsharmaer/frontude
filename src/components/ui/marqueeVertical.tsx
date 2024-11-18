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
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="text-white text-5xl font-bold font-['Aileron'] leading-[57.60px]">
          people love us !
        </div>
        <div className="text-white text-[16px] font-light font-['ITC Garamond Std'] leading-[24px]">
          see why clients rave about us—our excellence and innovation
          consistently exceed expectations.
        </div>
      </div>
      <div className="relative bg-black flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden rounded-lg bg-background md:shadow-xl">
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

        <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      </div>
    </>
  );
}
