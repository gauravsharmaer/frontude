/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
// import { Meteors } from "./meteors";
import { ParticlesDemo } from "./particlesui";
export interface AuthBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HomeBackground = React.forwardRef<HTMLDivElement, AuthBackgroundProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-[#070305] min-h-screen w-full overflow-x-hidden text-white ${className}`}
      {...props}
    >
      <ParticlesDemo />
      <div className="relative z-10 w-full">{props.children}</div>
    </div>
  )
);

HomeBackground.displayName = "HomeBackground";

export { HomeBackground };
