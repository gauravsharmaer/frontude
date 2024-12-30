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
      <div className="min-h-screen w-full relative flex items-center justify-center">
        <Image
          src={teamf}
          alt="teamf"
          className="w-full h-full object-contain md:object-cover absolute inset-0 px-4 md:px-0"
          priority
        />
      </div>
    </DynamicCursorWrapper>
  );
};

export default Newsletter;
