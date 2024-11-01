/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";
import { Meteors } from "./meteors";

export interface AuthBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HomeBackground = React.forwardRef<HTMLDivElement, AuthBackgroundProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-[#000000] relative flex justify-center items-center min-h-screen w-full overflow-hidden text-white bg-cover bg-center ${className}`}
      {...props}
    >
      {props.children}
      <Meteors number={40} />
    </div>
  )
);

HomeBackground.displayName = "HomeBackground";

export { HomeBackground };
