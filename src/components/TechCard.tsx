import { Layers } from "lucide-react";
import { memo } from "react";

interface TechCardProps {
  title: string;
  description: string;
}

const TechCard = memo(({ title, description }: TechCardProps) => {
  return (
    <div
      className="w-full sm:w-[350px] md:w-[400px] h-[437px] relative rounded-[20px] overflow-hidden mt-3 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CARD-F3qfquhy2m8N4AZkgG58HCcr1kgr9K.svg')`,
        willChange: "transform",
      }}
    >
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        <div className="h-12 w-12 rounded-full bg-[#ed482f] mb-12">
          <div className="h-full w-full rounded-full bg-black/70 flex items-center justify-center">
            <Layers className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-[32px] font-bold text-white leading-[1.1] font-inter">
            {title}
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-[1] text-gray-300 max-w-[95%] font-inter">
            {description}
          </p>
        </div>

        <div className="mt-7">
          <a
            href="#"
            className="group hoverable inline-flex items-center text-[18px] text-white font-medium hover:opacity-90 transition-opacity font-inter"
          >
            Start project
            <svg
              className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth={2}
                d="M17 8l4 4-4 4M3 12h18"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});

TechCard.displayName = "TechCard";

export default TechCard;
