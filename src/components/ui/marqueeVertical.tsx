import { Marquee } from "./marquee";
import React from "react";
import Card from "./Card";

const reviews = [
  {
    title:
      "Conversion exceeded our expectations!.Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://avatar.vercel.sh/jack",
  },
  {
    title:
      "Conversion exceeded our expectations!.Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://avatar.vercel.sh/jill",
  },
  {
    title:
      "Conversion exceeded our expectations!.Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://avatar.vercel.sh/john",
  },
  {
    title:
      "Conversion exceeded our expectations!.Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://avatar.vercel.sh/sarah",
  },
  {
    title:
      "Conversion exceeded our expectations!.Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://avatar.vercel.sh/mike",
  },
  {
    title:
      "Conversion exceeded our expectations!.Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://avatar.vercel.sh/emma",
  },
];

// Split reviews into three columns
// const columnSize = Math.ceil(reviews.length / 3);
// const firstColumn = reviews.slice(0, columnSize);
// const secondColumn = reviews.slice(columnSize, columnSize * 2);
// const thirdColumn = reviews.slice(columnSize * 2);

export function MarqueeDemoVertical() {
  // Responsive column logic
  const getColumnsForViewport = () => {
    // For mobile: all reviews in one column
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [reviews];
    }
    // For tablet: split into two columns
    else if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const halfPoint = Math.ceil(reviews.length / 2);
      return [reviews.slice(0, halfPoint), reviews.slice(halfPoint)];
    }
    // For desktop: original three columns
    const columnSize = Math.ceil(reviews.length / 3);
    return [
      reviews.slice(0, columnSize),
      reviews.slice(columnSize, columnSize * 2),
      reviews.slice(columnSize * 2),
    ];
  };

  const [columns, setColumns] = React.useState(getColumnsForViewport());

  React.useEffect(() => {
    const handleResize = () => {
      setColumns(getColumnsForViewport());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center px-4 text-center">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-pocKota leading-tight md:leading-[57.60px] mb-5">
          people{" "}
          <span className="font-['ITC Garamond Std'] leading-[67.20px] font-extralight">
            love{" "}
          </span>{" "}
          us !
        </div>
        <div className="opacity-70 text-white text-sm md:text-[16px] font-light font-inter leading-normal md:leading-[24px] max-w-3xl mb-14">
          see why clients rave about us—our excellence and innovation
          consistently exceed expectations.
        </div>
      </div>
      <div className="relative bg-black flex h-[400px] md:h-[450px] lg:h-[500px] w-full flex-row items-center justify-center gap-2 md:gap-4 overflow-hidden rounded-lg bg-background md:shadow-xl">
        {columns.map((column, columnIndex) => (
          <Marquee
            key={columnIndex}
            reverse={columnIndex === 1}
            pauseOnHover
            vertical
            className={`${
              columnIndex === 1 ? "[--duration:15s]" : "[--duration:10s]"
            }`}
          >
            {column.map((review, index) => (
              <Card key={index} {...review} />
            ))}
          </Marquee>
        ))}

        <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      </div>
    </>
  );
}
