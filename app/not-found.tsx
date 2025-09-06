'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function NotFound() {
  useGSAP(() => {
    gsap
      .fromTo(
        '#notFound',
        { opacity: 0, scale: 0.95, filter: 'blur(5px)', rotate: 2 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }
      )
      .delay(0.5)
      .duration(3);
  });

  return (
    <div id="notFound">
      <section className="h-screen flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-6xl md:text-9xl bg-clip-text text-transparent font-black bg-[url('/bg.jpg')] bg-center">
          Oops!
        </h1>
        <h2 className="text-xl font-bold uppercase">404 – Page not found</h2>
        <p className="text-lg text-neutral-400 leading-relaxed">
          The page your are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link className="text-neutral-400 underline decoration-dotted" href="/">
          Back Home
        </Link>
      </section>
    </div>
  );
}
