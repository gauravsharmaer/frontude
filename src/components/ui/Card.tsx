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
      className="bg-[#0c0c0c] border border-[#1f1f1f]
       rounded-xl px-2  w-[20rem] h-44   pt-3"
      onClick={onClick}
    >
      <div className="rounded-xl">
        <div
          className={`text-[#999999] font-medium mx-2
             font-inter text-[15.13px]  leading-[22.4px] tracking-[-0.32px] text-left`}
        >
          {`"${title}"`}
        </div>
        <div className="flex items-center gap-2  py-3 mx-2 rounde-xl">
          <Image
            src={icon}
            alt="icon"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="text-[#FFFFFF] font-medium font-inter text-[14.88px]  leading-[22.4px] tracking-[-0.32px] text-left">
              Belinda Meyers
            </p>
            <p className="text-[#999999] font-medium font-inter text-[13.13px]  leading-[22.4px] tracking-[-0.32px] text-left">
              COO of Friday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
