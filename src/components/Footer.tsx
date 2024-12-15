import React from "react";
import { FooterPattern } from "./FooterPattern";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <div className="border-t border-zinc-800 relative ">
      <div
        className="absolute inset-x-0 -top-[2px] h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(214, 24, 10, 0) 15%, rgba(214, 24, 10, 1) 50%, rgba(214, 24, 10, 0) 85%, transparent 100%)",
          boxShadow:
            "0 -120px 100px -5px rgba(214, 24, 10, 0.3), -10px -40px 40px 0 rgba(214, 24, 10, 0.6)",
        }}
      />
      <FooterText />
      <FooterPattern />
    </div>
  );
};

export default Footer;
