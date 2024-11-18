import React from "react";
import TechCard from "./TechCard";
const TechCardCollection = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="text-white text-5xl font-bold font-['Aileron'] leading-[57.60px]">
          how frontude can elevate your business?
        </div>
        <div className="text-white text-[16px] font-light font-['ITC Garamond Std'] leading-[24px]">
          Discover our custom solutions designed to drive your business forward,
          from our innovative services
        </div>
      </div>
      <div className=" flex items-center justify-center mt-16">
        <div className="flex flex-wrap gap-4">
          <TechCard />
          <TechCard />
          <TechCard />
        </div>
      </div>
    </div>
  );
};

export default TechCardCollection;
