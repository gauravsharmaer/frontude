import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, icon, onClick }) => {
  return (
    <div
      className=" relative  rounded-3xl bg-[#0D0D0D] border border-[#252525]
        px-2  w-[336px] h-[203px]  pt-3"
      onClick={onClick}
    >
      {/* Quote Text */}
      <div className="w-[281.87px] h-[87.17px] left-[24px] font-inter top-[25px] absolute text-[#999999] text-[15.12px] font-medium leading-snug">
        {`"${title}"`}
      </div>

      {/* Profile Section */}
      <div className="h-[41.98px] left-[24px] top-36 absolute justify-center items-center gap-3 inline-flex">
        {/* Profile Image */}
        <div className="w-9 h-9 relative rounded-[999px] flex-col justify-start items-start flex">
          <Image
            src={icon}
            alt="icon"
            width={36}
            height={36}
            className="w-9 h-9 relative rounded-[999px]"
          />
          <div className="w-9 h-9 rounded-[999px] border border-white/10 absolute top-0"></div>
        </div>

        {/* Profile Info */}
        <div className="w-60 self-stretch pt-px pb-[1.59px] flex-col justify-center items-start gap-[2.39px] inline-flex">
          <div className="text-[#fcfcfa] text-[14.88px] font-medium font-inter leading-snug">
            Belinda Meyers
          </div>
          <div className="text-[#999999] text-[13.12px] font-normal font-inter leading-tight">
            COO of Friday
          </div>
        </div>
      </div>

      {/* Border Overlay */}
      <div className="w-full h-full absolute top-0 left-0 rounded-3xl border border-white/10"></div>
    </div>
  );
};

export default Card;
