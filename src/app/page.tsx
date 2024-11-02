import React from "react";
import MouseTrail from "../components/MouseTrail";
import Globe from "../components/ui/globe";
import ServiceCard from "../components/ServiceCard";
import { AvatarCirclesDemo } from "../components/ui/avatar-circlesUi";
import ColorfulCardHover from "../components/ColorfulCardHover";
import { MarqueeDemoVertical } from "@/components/ui/marqueeVertical";
import { HomeBackground } from "../components/ui/Background";
import { IoIosStar } from "react-icons/io";
import Flogo from "../assets/FrontudeLogo.svg"
import Image from "next/image";
// import "./"



const Home = () => {
  return (
    <HomeBackground>
      <MouseTrail />
      <main className="flex flex-col w-full">
        {/* First section - Globe with light ray */}
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
          {/* Light ray effect */}
          <div
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
          />
          <Globe className="absolute !h-[600px] translate-y-[30%] opacity-50 -z-10" />
          <div className="flex flex-col items-center">
            <div className="flex items-start gap-6">
              <AvatarCirclesDemo />
              <div className="flex flex-col items-start justify-between">
                <div className="flex items-center gap-2">
                  <IoIosStar className="text-white" />
                  <IoIosStar className="text-white" />
                  <IoIosStar className="text-white" />
                  <IoIosStar className="text-white" />
                  <IoIosStar className="text-white" />
                </div>
                <p>100+ Businesses scaled</p>
              </div>
            </div>
            <h1 className="text-white text-center">Turn your <span>business vision</span> <br />into digital masterpiece</h1>
            <p className="mt-4 text-[20px]">
              we bring your ideas to life, creating standout <br /> products that fuel your growth and success.
            </p>
          </div>
          <div className="flex justify-center p-8 items-center absolute bottom-0 left-0 right-0">
            <div className="flex items-center gap-[50px]">
              <Image src={Flogo} alt="Frontude Logo" height={36} />
              <Image src={Flogo} alt="Frontude Logo" height={36} />
              <Image src={Flogo} alt="Frontude Logo" height={36} />
              <Image src={Flogo} alt="Frontude Logo" height={36} />
              <Image src={Flogo} alt="Frontude Logo" height={36} />
              <Image src={Flogo} alt="Frontude Logo" height={36} />
              <Image src={Flogo} alt="Frontude Logo" height={36} />
            </div>
          </div>
        </section>

        {/* Rest of the sections */}
        <section className="w-full py-20">
          <div className="container mx-auto flex flex-col gap-32">
            <div className="w-full flex justify-center items-center">
              <MarqueeDemoVertical />
            </div>
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
        </section>
      </main>
    </HomeBackground>
  );
};

export default Home;
