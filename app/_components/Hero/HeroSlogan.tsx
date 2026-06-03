'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { siteConfig } from '@/app/_config/siteConfig';

export default function HeroSlogan() {
  const sloganRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const slogan = sloganRef.current;
    if (!slogan) return;

    gsap.fromTo(
      slogan,
      {
        opacity: 0,
        scale: 0.95,
        filter: `blur(${siteConfig.fadeBlurInitVal}px)`,
        rotate: 3,
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        rotate: 0,
        delay: 0.5,
        duration: 1.5,
        ease: 'sine.inOut',
      },
    );

    ScrollTrigger.create({
      trigger: slogan,
      start: 'center+=0.51 center',
      onUpdate: (self) => {
        gsap.to(slogan, {
          opacity: 1 - self.progress,
          filter: `blur(${10 * self.progress}px)`,
          rotate: -3 * self.progress,
        });
      },
    });
  });

  return (
    <div
      ref={sloganRef}
      className="flex flex-col gap-2 w-full origin-left mix-blend-color-dodge"
    >
      <h1 className="text-3xl md:text-5xl text-neutral-400 font-bold leading-none">
        Hello. I am{' '}
        <span className="ml-2 text-5xl md:text-7xl text-neutral-400 font-bold leading-none font-[Amettasignature]">
          {siteConfig.nickname}.
        </span>
      </h1>
      <p className="text-md md:text-xl text-neutral-300 leading-snug text-wrap">
        Fullstack developer crafting code
        <br />– with a passion for design.
      </p>
    </div>
  );
}
