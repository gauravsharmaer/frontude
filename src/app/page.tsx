"use client";

import React, { useState } from "react";
import MouseTrail from "../components/MouseTrail";
import Globe from "../components/ui/globe";
import ServiceCard from "../components/ServiceCard";
import { AvatarCirclesDemo } from "../components/ui/avatar-circlesUi";
import ColorfulCardHover from "../components/ColorfulCardHover";
import { MarqueeDemoVertical } from "@/components/ui/marqueeVertical";
import { HomeBackground } from "../components/ui/Background";
// import { IoIosStar } from "react-icons/io";
import Flogo from "../assets/FrontudeLogo.svg";
import Image from "next/image";
import { RainbowButtonDemo } from "../components/ui/RainbowButtonui";
import Background from "../assets/image.jpg";
import { ParticlesDemo } from "@/components/ui/particlesui";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import AutoSlidingCarousel from "@/components/Carousel";
import Contact from "@/components/Contact";
// import "./"

const Nav = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-[120px] py-3 flex items-center justify-center">
      <div className="flex items-center justify-between rounded-lg backdrop-blur-md text-[20px] w-full text-white py-4 px-7 border border-white/20 shadow-lg">
        <div className="flex items-center justify-center">
          <Image src={Flogo} alt="logo" height={36} />
        </div>
        <div className="flex items-center gap-4 ml-12">
          <a href="#">Who we are </a>
          <a href="#">People love us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <button className="bg-white px-12 py-1 rounded-lg text-black">
          Get Started
        </button>
      </div>
    </nav>
  );
};
const Home = () => {
  // Add state to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Add mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <Nav />

      <HomeBackground>
        <MouseTrail />
        <main className="flex flex-col w-full">
          {/* First section - Globe with light ray */}
          <section
            className="h-screen w-full flex items-center justify-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <Image
              src={Background}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="-z-30 h-full w-full"
            />

            {/* Torch-like spotlight overlay */}
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

            <ParticlesDemo className="absolute inset-0 -z-10" />

            {/* <div className="flex flex-col items-center">
              <h1 className="text-white text-center text-[80px] relative">
                Crafting digital <span> masterpieces</span>{" "}
              </h1>
              <p className="mt-2 text-[32px] relative opacity-70 ">
                We bring your ideas to life, creating standout products <br />{" "}
                <span className="flex justify-center items-center -mt-[10px] ">
                  that fuel your growth and success.
                </span>
              </p>
              <div className="relative mt-20 ">
                <RainbowButtonDemo />
              </div>
            </div> */}
            <div className="flex flex-col items-center">
              <h1 className="text-white text-center text-[80px] relative">
                Crafting digital <span> masterpieces</span>{" "}
              </h1>
              <div className="flex items-center gap-4 mt-12">
                <div className="fading_div_left"></div>
                <strong className="text-white text-[24px]">At Frontude</strong>
                <div className="fading_div_right"></div>
              </div>
              <p className=" text-[24px] relative text-white">
                We bring your ideas to life, creating standout products <br />{" "}
                <span className="flex justify-center items-center -mt-[10px] ">
                  that fuel your growth and success.
                </span>
              </p>
              <div className="relative mt-20">
                <RainbowButtonDemo />
              </div>
            </div>
            {/* <div className="flex justify-center p-8 items-center absolute bottom-0 left-0 right-0">
              <div className="flex items-center gap-[50px]">
                <Image src={Flogo} alt="Frontude Logo" height={36} />
                <Image src={Flogo} alt="Frontude Logo" height={36} />
                <Image src={Flogo} alt="Frontude Logo" height={36} />
                <Image src={Flogo} alt="Frontude Logo" height={36} />
                <Image src={Flogo} alt="Frontude Logo" height={36} />
                <Image src={Flogo} alt="Frontude Logo" height={36} />
                <Image src={Flogo} alt="Frontude Logo" height={36} />
              </div>
            </div> */}
          </section>

          {/* Timeline section */}
          {/* <section className="w-full h-screen relative">
            <TimelineAnimation />
          </section> */}

          {/* Rest of the sections */}
          <section className="w-full py-20">
            {/* <div className="container mx-auto flex flex-col gap-32">
              <div className="w-full flex justify-center items-center">
                <ServiceCard />
              </div>
              <div className="w-full flex justify-center items-center">
                <ColorfulCardHover />
              </div>
              <div className="w-full flex justify-center items-center">
                <AvatarCirclesDemo />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <MarqueeDemoVertical />
            </div> */}
            <div className="container mx-auto flex flex-col gap-32">
              <div className="w-full flex justify-center items-center">
                <Services />
              </div>
              <div className="w-full flex justify-center items-center">
                <WhyUs />
              </div>
              <div className="w-full flex justify-center items-center">
                <AutoSlidingCarousel />
              </div>
              <div className="w-full flex justify-center items-center">
                {/* <Contact /> */}
              </div>
              <div className="w-full flex justify-center items-center">
                <MarqueeDemoVertical />
              </div>
            </div>
          </section>
        </main>
      </HomeBackground>
    </>
  );
};

export default Home;
