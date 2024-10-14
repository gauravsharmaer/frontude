/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

export interface AuthBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HomeBackground = React.forwardRef<HTMLDivElement, AuthBackgroundProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-[#000000]  flex justify-center items-center h-screen
    bg-cover bg-center ${className}`}
      {...props}
    />
  )
);

HomeBackground.displayName = "HomeBackground";

export { HomeBackground };
