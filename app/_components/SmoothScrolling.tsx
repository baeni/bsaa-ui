"use client";

import ReactLenis from "lenis/react";
import {ReactNode} from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ duration: 0.5 }}>
      {children}
    </ReactLenis>
  );
}