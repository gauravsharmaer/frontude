//page.tsx
"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { MarqueeDemoVertical } from "@/components/ui/marqueeVertical";
import { HomeBackground } from "../components/ui/Background";
import Flogo from "../assets/FrontudeLogo.svg";
import TechCardCollection from "../components/TechCardCollection";
import VerticalTimeline from "@/components/VerticalWhyUs";
import { RainbowButtonDemo } from "../components/ui/RainbowButtonui";
import Background from "../assets/image.jpg";
// import { ParticlesDemo } from "@/components/ui/particlesui";
import { TextRevealDemo } from "../components/TextRevealDemo";
import TimelineAnimation from "@/components/ui/TimelineAnimation";
import Footer from "../components/Footer";

import Genie from "../assets/Genie.svg";
import InpharmD_logo from "../assets/InpharmD_logo.svg";
import bartLogo from "../assets/bartLogo.svg";
import secretdesires from "../assets/secretdesires.svg";
import avena from "../assets/avena.svg";
import edneed from "../assets/edneed.svg";
import twinbo from "../assets/twinbo.svg";

import dynamic from "next/dynamic";

// Lazy load cursor wrapper
const DynamicCursorWrapper = dynamic(
  () => import("../components/CursorWrapper").then((mod) => mod.CursorWrapper),
  { ssr: false }
);

// Extract Nav component to separate memo'd component
const Nav = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEmailClick = useCallback(() => {
    const email = "your-email@frontude.com";
    const subject = "Get Started with Frontude";
    const body = "I would like to learn more about your services.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 backdrop-blur-sm">
      <div className="max-w-[1920px] mx-auto relative flex flex-col md:flex-row items-center justify-between text-sm sm:text-base w-full text-white">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center justify-center relative">
            <Image
              src={Flogo}
              alt="logo"
              height={24}
              className="h-[24px] sm:h-[28px] md:h-[32px] w-auto"
              priority
            />
          </div>
          <button
            className="md:hidden p-2"
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
          } md:flex flex-col md:flex-row py-3 px-4 md:px-5 lg:px-6
          shadow-lg md:shadow-none items-center rounded-lg 
          gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10
          mt-3 md:mt-0 md:ml-6 lg:ml-8
          bg-[#95959533]/15 w-full md:w-auto backdrop-blur-md 
          border border-white/20 md:border-0
          absolute md:relative top-full md:top-auto left-0 md:left-auto
          text-[14px] sm:text-[15px] md:text-[16px]`}
        >
          <a
            href="#about"
            className="hover:text-gray-300 transition-colors font-inter hoverable"
            aria-label="Who we are"
          >
            Who we are
          </a>
          <a
            href="#testimonials"
            className="hover:text-gray-300 transition-colors font-inter hoverable"
            aria-label="People love us"
          >
            People love us
          </a>
          <a
            href="#services"
            className="hover:text-gray-300 transition-colors font-inter hoverable"
            aria-label="Services"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors font-inter hoverable"
            aria-label="Contact"
          >
            Contact
          </a>
          <button
            className="md:hidden w-full
            bg-white hover:bg-gray-100 
            px-4 h-[38px] rounded-lg 
            font-medium text-black
            transition-colors duration-200
            text-[14px]"
            onClick={handleEmailClick}
          >
            Get Started
          </button>
        </div>

        <button
          className="hidden md:flex items-center justify-center
          bg-white hover:bg-gray-100 
          px-4 sm:px-5 md:px-6 lg:px-8
          h-[34px] sm:h-[38px] md:h-[42px]
          rounded-lg font-medium text-black
          transition-colors duration-200
          text-[14px] sm:text-[15px] md:text-[16px]
          whitespace-nowrap"
          onClick={handleEmailClick}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
});

interface LogoScrollProps {
  logos: {
    src: string;
    alt: string;
  }[];
}

// Extract LogoScroll into separate component
const LogoScroll = React.memo<LogoScrollProps>(({ logos }) => (
  <div className="flex space-x-8 sm:space-x-12 md:space-x-16 animate-loop-scroll">
    {logos.map((logo, index) => (
      <Image
        key={index}
        src={logo.src}
        alt={logo.alt}
        className="w-auto cursor-pointer max-w-none h-[16px] sm:h-[18px] md:h-[24px]"
      />
    ))}
  </div>
));

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedHandleResize = debounce(handleResize, 250);

    handleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (windowSize.width > 768) {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [windowSize.width]
  );

  const logos = useMemo(
    () => [
      { src: twinbo, alt: "icon1" },
      { src: Genie, alt: "icon2" },
      { src: InpharmD_logo, alt: "icon3" },
      { src: secretdesires, alt: "icon4" },
      { src: bartLogo, alt: "icon5" },
      { src: avena, alt: "icon6" },
      { src: edneed, alt: "icon7" },
    ],
    []
  );

  const backgroundStyle = useMemo(
    () =>
      ({
        objectPosition: windowSize.width <= 768 ? "center center" : "50% 50%",
        objectFit: windowSize.width <= 768 ? "scale-down" : "cover",
        transform: windowSize.width <= 768 ? "scale(1.5)" : "none",
      } as const),
    [windowSize.width]
  );

  const overlayStyle = useMemo(
    () => ({
      maskImage: `
      radial-gradient(
        ellipse min(60vw, 400px) min(70vh, 600px) at ${mousePosition.x}px ${
        mousePosition.y
      }px,
        transparent 10%,
        rgba(0,0,0,0.2) 40%,
        black 70%
      ),
      radial-gradient(
        ellipse min(65vw, 500px) min(75vh, 700px) at ${
          mousePosition.x + 100
        }px ${mousePosition.y - 50}px,
        transparent 20%,
        black 70%
      )
    `,
      WebkitMaskImage: `
      radial-gradient(
        ellipse min(60vw, 400px) min(70vh, 600px) at ${mousePosition.x}px ${
        mousePosition.y
      }px,
        transparent 10%,
        rgba(0,0,0,0.2) 40%,
        black 70%
      ),
      radial-gradient(
        ellipse min(65vw, 500px) min(75vh, 700px) at ${
          mousePosition.x + 100
        }px ${mousePosition.y - 50}px,
        transparent 20%,
        black 70%
      )
    `,
      filter: "blur(40px)",
    }),
    [mousePosition]
  );

  return (
    <DynamicCursorWrapper>
      <Nav />
      <HomeBackground>
        <main className="flex flex-col w-full relative gap-12 sm:gap-16 md:gap-20">
          <section
            className="min-h-[100dvh] w-full flex items-center justify-center 
            relative overflow-hidden 
            px-3 sm:px-4 md:px-6 lg:px-8 
            py-12 sm:py-16 md:py-20 lg:py-24"
            onMouseMove={handleMouseMove}
          >
            <Image
              src={Background}
              alt="Background"
              fill
              className="-z-30 h-full w-full object-cover"
              style={backgroundStyle}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAAB..."
            />

            {typeof window !== "undefined" && windowSize.width > 600 ? (
              <div
                className="absolute inset-0 bg-black/70 -z-20 transition-[mask-position] duration-300 ease-in-out"
                style={overlayStyle}
              />
            ) : (
              <div className="absolute inset-0 bg-black/60 -z-20" />
            )}

            {/* <ParticlesDemo /> */}

            <div className="flex flex-col items-center w-full max-w-[min(100%,1440px)] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <h1 className="text-white font-pocKota text-center text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] xl:text-[72px] 2xl:text-[80px] font-bold relative leading-[1.2]">
                Crafting digital{" "}
                <span className="text-gradient">masterpieces</span>
              </h1>

              <p className="text-center text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] font-inter leading-relaxed">
                We turn your boldest ideas into remarkable realities, creating
                groundbreaking products that ignite your growth and empower your
                journey to success.
              </p>

              <div className="relative mt-4">
                <RainbowButtonDemo />
              </div>

              <div className="text-center text-white text-sm sm:text-base md:text-lg lg:text-2xl font-inter mt-4 mb-4">
                Our team has built exceptional products.
              </div>

              <div className="flex space-x-8 sm:space-x-12 md:space-x-16 overflow-hidden w-[90%] sm:w-[80%] md:w-[70%] xl:max-w-[1160px] mt-6">
                <LogoScroll logos={logos} />
                <LogoScroll logos={logos} />
              </div>
            </div>
          </section>

          <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 md:py-0 lg:py-0 max-w-[2000px] mx-auto">
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 max-w-[1920px] mx-auto">
              <div className="w-full flex justify-center items-center px-2 sm:px-4 md:px-6">
                <TextRevealDemo />
              </div>

              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto">
                <TimelineAnimation />
              </div>

              <div className="flex flex-col w-full px-2 sm:px-4 md:px-6 lg:px-8">
                <TechCardCollection />
              </div>

              <div className="flex flex-col mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto">
                <VerticalTimeline />
              </div>

              <div className="flex flex-col mt-6 sm:mt-8 md:mt-12 lg:mt-16 w-full">
                <MarqueeDemoVertical />
              </div>

              <div className="flex flex-col mt-6 sm:mt-8 md:mt-12 lg:mt-16 w-full">
                <Footer />
              </div>
            </div>
          </section>
        </main>
      </HomeBackground>
    </DynamicCursorWrapper>
  );
};

// Utility function for debouncing
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Home;
