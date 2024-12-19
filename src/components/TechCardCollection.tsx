import { memo, useMemo } from "react";
import TechCard from "./TechCard";

// Move data outside component to prevent recreation
const cardData = [
  {
    title: "Modern Application Development",
    description:
      "Create powerful, intuitive applications that solve real business challenges. From web platforms to mobile solutions, we build technology that works for you and your users.",
  },
  {
    title: "Digital Transformation",
    description:
      "Navigate change confidently with strategic technology adoption. We help modernize your operations while maintaining business continuity.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Build scalable, secure foundations for your digital presence. Our cloud solutions optimize performance and protect your valuable data.",
  },
  {
    title: "Analytics & Intelligence",
    description:
      "Transform data into insights that drive better business decisions. We implement tools that help you understand and act on key metrics.",
  },
] as const; // Make readonly to prevent unnecessary re-renders

const TechCardCollection = memo(() => {
  // Memoize the card elements to prevent unnecessary re-renders
  const cardElements = useMemo(
    () =>
      cardData.map((card, index) => (
        <TechCard
          key={index}
          title={card.title}
          description={card.description}
        />
      )),
    []
  ); // Empty dependency array since cardData is constant

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-pocKota leading-tight sm:leading-[57.60px] will-change-transform">
          how frontude can elevate your business?
        </h2>
        <p className="opacity-70 text-white text-[14px] sm:text-[16px] font-light font-inter leading-normal sm:leading-[24px] max-w-[90%] sm:max-w-none">
          By uniting creativity and innovation, our team brings every project to
          life with precision and passion, delivering results that exceed
          expectations. Here's how we make a difference:
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mt-10 content-visibility-auto">
        {cardElements}
      </div>
    </div>
  );
});

TechCardCollection.displayName = "TechCardCollection";

export default TechCardCollection;
