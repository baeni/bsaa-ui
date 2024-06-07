import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_assets/globals.css";
import {gsap} from "gsap";
import SmoothScrolling from "@/app/_components/SmoothScrolling";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

gsap.defaults({
  ease: "power3.inOut"
});

export const metadata: Metadata = {
  title: "Benjamin — Development",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}