import React from "react";
import Image from "next/image";
import user from "../assets/user.svg";
import image6593 from "../assets/image 6593.png";
import image6588 from "../assets/image 6588.png";

const ServiceCard = () => {
  return (
    <>
      <div className="w-[368px] h-[510px] relative rounded-[32px] border border-white/40">
        <div className="left-[28px] top-[28px] absolute flex-col justify-center items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-8 h-8 relative">
              <Image className="w-8 h-8" alt="User" src={user} />
            </div>
            <div className="text-white text-2xl font-semibold font-['Aileron'] leading-[28.80px]">
              web development{" "}
            </div>
          </div>
          <div className="w-[312px] text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-[18.20px]">
            creating dynamic, responsive websites that captivate audiences and
            drive results, tailored to reflect your brand and engage users.
          </div>
        </div>
        <Image
          className="w-[305px] h-[371.19px] left-[67px] top-[140px] absolute"
          alt="Image"
          src={image6588}
        />
      </div>

      <div className="w-[368px] h-[510px] relative rounded-[32px] border border-white/40 backdrop-blur-[10px] overflow-hidden">
        <div className="left-[28px] top-[28px] absolute flex-col justify-center items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-8 h-8 relative"></div>
            <div className="text-white text-2xl font-semibold font-['Aileron'] leading-[28.80px]">
              web & mobile apps
            </div>
          </div>
          <div className="w-[312px] text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-[18.20px]">
            Designing and developing user-friendly web and mobile apps that
            blend form and function, tailored to your business needs.
          </div>
        </div>
        <Image
          alt="img"
          className="w-w-[273px] h-[436.67px] left-[100px] top-[161.81px] absolute"
          src={image6593}
        />
      </div>
    </>
  );
};

export default ServiceCard;
