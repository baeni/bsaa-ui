'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteConfig } from '../_config/siteConfig';

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const contact = contactRef.current;
    if (!contact) return;

    gsap.fromTo(
      contact,
      {
        opacity: 0,
        scale: 0.95,
        filter: `blur(${siteConfig.fadeBlurInitVal}px)`,
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: contact,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reverse',
        },
        ease: 'circ.inOut',
      },
    );
  });

  return (
    <div
      className="flex justify-between items-center p-1 pl-3 md:p-2 md:pl-4 bg-gradient-to-tr from-neutral-200 to-neutral-50 bg-opacity-25 backdrop-blur border border-neutral-200 rounded-full drop-shadow"
      ref={contactRef}
    >
      <p className="block md:hidden text-xs md:text-sm font-medium">
        Wanna build together?
      </p>
      <p className="hidden md:block text-sm font-medium">
        Wanna build something great together?
      </p>

      <a
        className="px-4 py-2 bg-neutral-400 bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 backdrop-blur rounded-full text-xs md:text-sm font-medium text-nowrap"
        href={siteConfig.contactUrl}
        target="_blank"
      >
        Let&apos;s connect!
      </a>
    </div>
  );
}
