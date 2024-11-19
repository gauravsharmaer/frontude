import { Layers } from "lucide-react";

export default function Component() {
  return (
    <div
      className="w-full sm:w-[350px] md:w-[400px] h-[437px] relative rounded-[20px] overflow-hidden"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CARD-F3qfquhy2m8N4AZkgG58HCcr1kgr9K.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        {/* Icon section with gradient border */}
        <div className="h-12 w-12 rounded-full  bg-gradient-to-br from-[#ed482f] to-white p-[1px] mb-12  border border-none border-[#df513c]">
          <div className="h-full w-full rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <Layers className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white leading-[1.1]">
            App Development
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-gray-300 max-w-[95%] font-inter">
            We design web, mobile, and desktop apps that are visually stunning
            and user- friendly. Our expert team ensures every app meets your
            needs and exceeds expectations.
          </p>
        </div>

        {/* Bottom link */}
        <div className="mt-auto pt-8">
          <a
            href="#"
            className="group inline-flex items-center text-[18px] text-white font-medium hover:opacity-90 transition-opacity font-inter"
          >
            Start project
            <svg
              className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
