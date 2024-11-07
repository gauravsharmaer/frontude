import * as React from "react";
import { ParticlesDemo } from "./particlesui";

export interface AuthBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HomeBackground = React.forwardRef<HTMLDivElement, AuthBackgroundProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-[#070305] min-h-screen w-full relative overflow-auto ${className}`}
      {...props}
    >
      <ParticlesDemo className="fixed inset-0 -z-10 pointer-events-none" />
      <div className="relative z-10 w-full">{props.children}</div>
    </div>
  )
);

HomeBackground.displayName = "HomeBackground";

export { HomeBackground };
