import TextReveal from "./ui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="relative w-full min-h-[100vh] pointer-events-none">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <TextReveal
          text="Frontude will change the way you design. 
                Experience a new level of creativity and efficiency in your projects."
          className="hoverable text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%] font-inter"
        />
      </div>
    </div>
  );
}
