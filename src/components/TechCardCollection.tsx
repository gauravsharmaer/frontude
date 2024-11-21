import React from "react";
import TechCard from "./TechCard";
const TechCardCollection = () => {
  return (
    <div className="flex flex-col gap-6  px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <div className="text-white text-3xl sm:text-4xl md:text-5xl  font-pocKota leading-tight sm:leading-[57.60px]">
          how frontude can elevate your business?
        </div>
        <div className="opacity-70 text-white text-[14px] sm:text-[16px] font-light font-inter leading-normal sm:leading-[24px] max-w-[90%] sm:max-w-none">
          uniting creativity and innovation, our team brings every project to
          life with precision and passion, delivering results that exceed
          expectations.
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 sm:mt-16">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
          <TechCard />
          <TechCard />
          <TechCard />
        </div>
      </div>
    </div>
  );
};

export default TechCardCollection;
