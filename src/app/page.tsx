import React from "react";
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
import Background from "../assets/image.jpg"
// import "./"

const Nav = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 p-8 flex items-center justify-center">
      <div className="flex items-center gap-8 rounded-lg backdrop-blur-md text-[20px] bg-white/10 py-2 px-7 border border-white/20 shadow-lg">
        <a href="#">who we are </a>
        <a href="#">people love us</a>
        <a href="#">services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <Nav />

      <HomeBackground>
        <MouseTrail />
        <main className="flex flex-col w-full">
          {/* First section - Globe with light ray */}
          <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            <Image src={Background} alt="Background" layout="fill" objectFit="cover" className="-z-30 h-full w-full" />
            {/* <div className="bg-[#1616168c] absolute top-0 left-0 right-0 bottom-0 -z-10" ></div> */}
            {/* Light ray effect */}
            {/* <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[160%] opacity-50 pointer-events-none"
              style={{
                width: "30%",
                clipPath: "polygon(48% 0%, 52% 0%, 150% 100%, -50% 100%)",
                background: `linear-gradient(180deg, 
                rgba(0, 72, 255, 0.4) 0%,
                rgba(0, 72, 255, 0.3) 20%,
                rgba(0, 72, 255, 0.2) 40%,
                rgba(0, 72, 255, 0.15) 60%,
                rgba(0, 72, 255, 0.1) 80%,
                transparent 100%)`,
                filter: "blur(40px)",
                zIndex: 5,
                transform: "translateX(-50%) translateY(-15%)",
              }}
            /> */}
            {/* <Globe className="absolute !h-[600px] translate-y-[60%] opacity-50 -z-10" /> */}
            <div className="flex flex-col items-center">
              
              <h1 className="text-white text-center text-[80px] relative">
                Crafting digital <span> masterpieces</span>{" "}
              </h1>
              <p className="mt-2 text-[32px] relative opacity-70 ">
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

          {/* Rest of the sections */}
          <section className="w-full py-20">
            <div className="container mx-auto flex flex-col gap-32">
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
            </div>
          </section>
        </main>
      </HomeBackground>
    </>
  );
};

export default Home;
