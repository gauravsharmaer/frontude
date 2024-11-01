import React from "react";
import MouseTrail from "../components/MouseTrail";
import Globe from "../components/ui/globe";
import ServiceCard from "../components/ServiceCard";
import CardContainer from "../components/ui/CardContainer";
import ColorfulCardHover from "../components/ColorfulCardHover";
import { MarqueeDemoVertical } from "@/components/ui/marqueeVertical";
import { HomeBackground } from "../components/ui/Background";

const Home = () => {
  return (
    <HomeBackground>
      <MouseTrail />
      <main className="flex flex-col min-h-screen w-full">
        <div className="relative h-screen flex items-center justify-center">
          <Globe className="!relative !h-[600px]" />
        </div>

        {/* <div className="flex flex-col gap-20 py-20">
          <div className="flex justify-center items-center">
            <MarqueeDemoVertical />
          </div>

          <div className="flex justify-center items-center">
            <ServiceCard />
          </div>

          <div className="flex justify-center items-center">
            <ColorfulCardHover />
          </div>

          <div className="flex justify-center items-center">
            <CardContainer />
          </div>
        </div> */}
      </main>
    </HomeBackground>
  );
};

export default Home;
