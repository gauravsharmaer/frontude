import React, { useState, useEffect } from "react";
import { BorderBeam } from "./ui/border-beam";

const testimonials = [
  {
    client: "John Doe",
    org: "Frontude",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    client: "Jane Doe",
    org: "Frontude",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    client: "John Smith",
    org: "Frontude",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    client: "John Smith",
    org: "Frontude",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    client: "John Smith",
    org: "Frontude",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AutoSlidingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col relative items-center px-[80px] py-4 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mt-12">
          <div className="fading_div_left"></div>
          <strong className="text-white text-[24px]">Testimonials</strong>
          <div className="fading_div_right"></div>
        </div>
        <p className=" text-[24px] relative text-center opacity-70 text-white">
          What are clients have to say about us
        </p>
      </div>
      <div className="carousel-container relative w-full mt-8">
        <div
          className="slides w-full flex items-center justify-center transition-transform duration-500 mb-[60px]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((slide, index) => (
            <div
              key={index}
              className="slide w-full flex items-center justify-center flex-shrink-0"
            >
              <div
                className="card relative flex flex-col items-center px-8 py-4 w-[60%]
                border-white/30 rounded-2xl border
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                backdrop-blur-[5px] 
                hover:backdrop-blur-[12px] transition-all duration-300
                overflow-hidden"
              >
                <BorderBeam
                  size={150}
                  duration={8}
                  delay={2}
                  colorFrom="#ffffff"
                  colorTo="#d6180a"
                  borderWidth={1}
                />
                <h3 className="mt-6 text-[32px] text-center hoverable text-white relative">
                  {slide.description}
                </h3>
                <div className="flex items-center w-auto gap-8 mt-[40px] relative">
                  <p className="text-white">{slide.client}</p>
                  <div className="w-[2px] h-[20px] bg-[#d6180a]"></div>
                  <p className="text-white">{slide.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSlidingCarousel;
