import TextReveal from "./ui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="relative w-full min-h-[100vh] pointer-events-none text-center justify-center items-center">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <TextReveal
          text="Frontude will change the way you design. 
                Experience a new level of creativity and efficiency in your projects."
          className="hoverable"
        />
      </div>
    </div>
  );
}
