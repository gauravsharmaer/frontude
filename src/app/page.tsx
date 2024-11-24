"use client";
import { CursorWrapper } from "../components/CursorWrapper";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MarqueeDemoVertical } from "@/components/ui/marqueeVertical";
import { HomeBackground } from "../components/ui/Background";
import Flogo from "../assets/FrontudeLogo.svg";
import TechCardCollection from "../components/TechCardCollection";

import { RainbowButtonDemo } from "../components/ui/RainbowButtonui";
import Background from "../assets/image.jpg";
import { ParticlesDemo } from "@/components/ui/particlesui";
import { TextRevealDemo } from "../components/TextRevealDemo";
import TimelineAnimation from "@/components/ui/TimelineAnimation";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-4 left-0 right-0 z-50 px-4 md:px-12 py-3">
      <div
        className="relative flex flex-col md:flex-row items-center justify-between 
        text-base md:text-[16px] w-full text-white overflow-hidden"
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center justify-center relative">
            <Image src={Flogo} alt="logo" height={36} priority />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row  py-4 px-4 md:px-7
        shadow-lg items-center rounded-lg gap-4 md:gap-12 mt-4 md:mt-0 md:ml-12 relative bg-[#95959533]/15 w-full md:w-auto backdrop-blur-md border border-white/20`}
        >
          <a
            href="#about"
            className="hover:text-gray-300 transition-colors font-inter"
            aria-label="Who we are"
          >
            Who we are
          </a>
          <a
            href="#testimonials"
            className="hover:text-gray-300 transition-colors font-inter"
            aria-label="People love us"
          >
            People love us
          </a>
          <a
            href="#services"
            className="hover:text-gray-300 transition-colors font-inter"
            aria-label="Services"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors font-inter"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>

        <button
          className="hidden md:block mt-4 md:mt-0 w-full md:w-auto bg-white px-8 
        md:px-12 py-2 rounded-lg font-medium text-black relative hover:bg-gray-100 transition-colors  text-[18px] h-[50px] font-inter"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (windowSize.width > 768) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <CursorWrapper>
      <Nav />
      <HomeBackground>
        <main className="flex flex-col w-full relative gap-20">
          <section
            className="min-h-[calc(100vh-4rem)] w-full flex items-center
             justify-center relative overflow-hidden px-4 py-20 md:py-0 md:mt-4 "
            onMouseMove={handleMouseMove}
          >
            <Image
              src={Background}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="-z-30 h-full w-full"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD
              /4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAE
              AAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADT
              LQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              AAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPA
              AAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAA
              AAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJ
              YWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACS
              gAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANW
              QAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAb
              ABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHy4lJyctL
              zkyMi8nLy0wO0BCPzhLPS0yRWFFS1NWW1xfOUNXZWVfbVZbW1v/2wBDARUXFx4aHjshITs7W1Fb
              W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAI
              AAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA
              /8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />

            {windowSize.width > 600 && (
              <div
                className="absolute inset-0 bg-black/70 -z-20 transition-[mask-position] duration-300 ease-in-out"
                style={{
                  maskImage: `
                    radial-gradient(
                      ellipse 400px 600px at ${mousePosition.x}px ${
                    mousePosition.y
                  }px,
                      transparent 10%,
                      rgba(0,0,0,0.2) 40%,
                      black 70%
                    ),
                    radial-gradient(
                      ellipse 500px 700px at ${mousePosition.x + 100}px ${
                    mousePosition.y - 50
                  }px,
                      transparent 20%,
                      black 70%
                    )
                  `,
                  WebkitMaskImage: `
                    radial-gradient(
                      ellipse 400px 600px at ${mousePosition.x}px ${
                    mousePosition.y
                  }px,
                      transparent 10%,
                      rgba(0,0,0,0.2) 40%,
                      black 70%
                    ),
                    radial-gradient(
                      ellipse 500px 700px at ${mousePosition.x + 100}px ${
                    mousePosition.y - 50
                  }px,
                      transparent 20%,
                      black 70%
                    )
                  `,
                  filter: "blur(40px)",
                }}
              />
            )}

            <ParticlesDemo />

            <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  md:py-0 gap-6">
              <h1 className="text-white font-pocKota text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold relative leading-tight ">
                Crafting digital{" "}
                <span className="text-gradient">masterpieces</span>
              </h1>

              <p
                className="text-center 
               text-white text-sm sm:text-base md:text-lg lg:text-2xl  font-inter"
              >
                We turn your boldest ideas into remarkable realities, creating
                groundbreaking products that ignite your growth and empower your
                journey to success.
              </p>
              <div className="relative  mt-4 ">
                <RainbowButtonDemo />
              </div>

              <div
                className="text-center 
               text-white text-sm sm:text-base md:text-lg lg:text-2xl  font-inter mt-4 mb-4"
              >
                Our team has built exceptional products.
              </div>
              <div className="flex space-x-16 overflow-hidden xl:max-w-[1160px] max-w-[70%] mt-6">
                <div className="flex space-x-16 animate-loop-scroll">
                  <Image
                    src={icon1}
                    alt="icon1"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon2}
                    alt="icon2"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon3}
                    alt="icon3"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon4}
                    alt="icon4"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon5}
                    alt="icon5"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon6}
                    alt="icon6"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                </div>
                <div className="flex space-x-16 animate-loop-scroll">
                  <Image
                    src={icon1}
                    alt="icon1"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon2}
                    alt="icon2"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon3}
                    alt="icon3"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon4}
                    alt="icon4"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon5}
                    alt="icon5"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                  <Image
                    src={icon6}
                    alt="icon6"
                    className=" w-auto cursor-pointer max-w-none h-[20px]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="flex flex-col gap-16">
              <div className="w-full flex justify-center items-center">
                <TextRevealDemo />
              </div>
              <div className="flex flex-col gap-8">
                <TimelineAnimation />
              </div>

              <div className="flex flex-col ">
                <TechCardCollection />
              </div>

              <div className="flex flex-col mt-8">
                <MarqueeDemoVertical />
              </div>
            </div>
          </section>

          <section className="w-full py-16 ">
            <div className="container mx-auto px-4 flex flex-col gap-16 md:gap-32"></div>
          </section>
        </main>
      </HomeBackground>
    </CursorWrapper>
  );
};

export default Home;
