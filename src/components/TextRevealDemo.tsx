import TextReveal from "./ui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="relative w-full min-h-screen pointer-events-none">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 flex-col">
        <TextReveal
          text="Transform your business for the digital age with solutions that matter. At Frontude, we build more than websites and apps – we create digital experiences that drive growth and engage modern audiences."
          className="hoverable 
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            max-w-[98%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%]
            font-inter 
            leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[1.45]
            tracking-tight
            text-center"
        />
      </div>
    </div>
  );
}
