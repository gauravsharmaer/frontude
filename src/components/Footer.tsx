import React from "react";
import FooterText from "./FooterText";

const Footer = React.memo(() => {
  return (
    <div className="border-t border-zinc-800 relative">
      <div
        className="absolute inset-x-0 -top-[2px] h-[2px] footer-gradient"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(214, 24, 10, 0) 15%, rgba(214, 24, 10, 1) 50%, rgba(214, 24, 10, 0) 85%, transparent 100%)",
        }}
      />
      <div className="container mx-auto">
        <FooterText />
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
