import React from "react";
// import ColorfulCardHover from "../components/ColorfulCardHover";
import MouseTrail from "../components/MouseTrail";
import Globe from "../components/ui/globe";
import ServiceCard from "../components/ServiceCard";
// import Meteors from "../components/ui/meteors";
import CardContainer from "../components/ui/CardContainer";
import ColorfulCardHover from "../components/ColorfulCardHover";
import { MarqueeDemoVertical } from "@/components/ui/marqueeVertical";
const Home = () => {
  return (
    <>
      <MouseTrail />
      <div className="flex justify-center items-center my-10">
        {/* <Globe /> */}
      </div>
      {/* <CardContainer /> */}
      <div className="flex flex-col overflow-hidden max-w-full h-full">
        <div className="flex justify-center items-center my-10 flex-row">
          {/* <MarqueeDemoVertical /> */}
        </div>
        <div className="flex justify-center items-center my-10">
          {/* <ServiceCard /> */}
        </div>

        <div className="flex justify-center items-center my-10">
          <ColorfulCardHover />
        </div>
      </div>

      {/* <Meteors number={100} /> */}
      {/* <ServiceCard /> 
      <CardContainer /> 
      {/* <MouseTrail />
      <ColorfulCardHover /> */}
    </>
  );
};

export default Home;
