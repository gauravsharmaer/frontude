import { Layers } from "lucide-react";
import { memo } from "react";

interface TechCardProps {
  title: string;
  description: string;
}

const TechCard = memo(({ title, description }: TechCardProps) => {
  // Predefine styles to avoid inline style calculations
  const cardStyle = {
    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CARD-F3qfquhy2m8N4AZkgG58HCcr1kgr9K.svg')`,
    willChange: "transform",
  } as const;

  return (
    <div
      className="w-full sm:w-[350px] md:w-[400px] h-[437px] relative rounded-[20px] overflow-hidden mt-3 bg-cover bg-center"
      style={cardStyle}
    >
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        {/* Icon container */}
        <div className="h-12 w-12 rounded-full bg-[#ed482f] mb-12 flex items-center justify-center">
          <div className="h-full w-full rounded-full bg-black/70 flex items-center justify-center">
            <Layers className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>

        {/* Content container - using CSS Grid for better performance */}
        <div className="grid gap-4 sm:gap-6">
          <h2 className="text-[32px] font-bold text-white leading-tight font-inter">
            {title}
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-normal text-gray-300 max-w-[95%] font-inter">
            {description}
          </p>
        </div>

        {/* CTA Button - Optimized with transform instead of translate for better performance */}
        <div className="mt-auto pt-7">
          <a
            href="#"
            className="group inline-flex items-center text-[18px] text-white font-medium transition-opacity hover:opacity-90 font-inter"
            role="button"
          >
            Start project
            <svg
              className="ml-3 h-5 w-5 transform transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                d="M17 8l4 4-4 4M3 12h18"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});

// Ensure proper display name for React DevTools
TechCard.displayName = "TechCard";

export default TechCard;
