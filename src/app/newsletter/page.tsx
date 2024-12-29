import React from "react";
import teamf from "../../assets/team f.png";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicCursorWrapper = dynamic(
  () => import("@/components/CursorWrapper").then((mod) => mod.CursorWrapper),
  { ssr: false }
);

const Newsletter = () => {
  return (
    <DynamicCursorWrapper>
      <div className="h-screen w-screen relative">
        <Image
          src={teamf}
          alt="teamf"
          className="w-full h-full object-cover absolute inset-0"
          priority
        />
      </div>
    </DynamicCursorWrapper>
  );
};

export default Newsletter;
