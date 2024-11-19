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
// import Services from "@/components/Services";
// import WhyUs from "@/components/WhyUS";
import { TextRevealDemo } from "../components/TextRevealDemo";
import TimelineAnimation from "@/components/ui/TimelineAnimation";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-4 left-0 right-0 z-50 px-4 md:px-12 py-3">
      <div
        className="relative flex flex-col md:flex-row items-center justify-between 
      rounded-lg backdrop-blur-md text-base md:text-[20px] w-full text-white py-4 px-4 md:px-7
       border border-white/20 shadow-lg overflow-hidden"
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
          } md:flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 md:ml-12 relative w-full md:w-auto`}
        >
          <a
            href="#about"
            className="hover:text-gray-300 transition-colors"
            aria-label="Who we are"
          >
            Who we are
          </a>
          <a
            href="#testimonials"
            className="hover:text-gray-300 transition-colors"
            aria-label="People love us"
          >
            People love us
          </a>
          <a
            href="#services"
            className="hover:text-gray-300 transition-colors"
            aria-label="Services"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>

        <button className="mt-4 md:mt-0 w-full md:w-auto bg-white px-8 md:px-12 py-2 rounded-lg text-black relative hover:bg-gray-100 transition-colors">
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

            <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
              <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold relative leading-tight">
                Crafting digital{" "}
                <span className="text-gradient">masterpieces</span>
              </h1>
              <div className="flex items-center gap-2 sm:gap-4 mt-6 sm:mt-8 md:mt-12">
                <div className="hidden md:block fading_div_left"></div>
                <strong className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                  At Frontude
                </strong>
                <div className="hidden md:block fading_div_right"></div>
              </div>
              <p className="text-center text-white text-sm sm:text-base md:text-lg lg:text-2xl mt-4 max-w-3xl px-4">
                We bring your ideas to life, creating standout products that
                fuel your growth and success.
              </p>
              <div className="relative mt-8 sm:mt-10 md:mt-16 lg:mt-20">
                <RainbowButtonDemo />
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="flex flex-col gap-16 md:gap-32">
              <div className="w-full flex justify-center items-center">
                <TextRevealDemo />
              </div>
              <div className="flex flex-col gap-8">
                <TimelineAnimation />
              </div>

              <div className="flex flex-col gap-8">
                <TechCardCollection />
              </div>

              <div className="flex flex-col gap-8">
                <MarqueeDemoVertical />
              </div>
            </div>
          </section>

          <section className="w-full py-16 ">
            <div className="container mx-auto px-4 flex flex-col gap-16 md:gap-32">
              {/* <div className="w-full flex justify-center items-center">
                <Services />
              </div> */}
              {/* <div className="w-full flex justify-center items-center">
                <WhyUs />
              </div> */}
            </div>
          </section>
        </main>
      </HomeBackground>
    </CursorWrapper>
  );
};

export default Home;
