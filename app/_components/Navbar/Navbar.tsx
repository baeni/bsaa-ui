'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import * as Constants from '@/app/constants';
import { useRef, useState } from 'react';
import { CONTACT_URL } from '@/app/constants';
import NavbarListItem from '@/app/_components/Navbar/NavbarListItem';

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarOverlayBtnSvgRef = useRef<SVGSVGElement>(null);
  const navbarOverlayRef = useRef<HTMLDivElement>(null);
  const navbarOverlayBgRef = useRef<HTMLDivElement>(null);
  const navbarOverlayListRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const navbar = navbarRef.current;

    gsap.fromTo(
      navbar,
      { opacity: '0', y: '-25' },
      { opacity: '1', y: '0', delay: 1, duration: 3, ease: 'power4.inOut' }
    );
  });

  const [isShowingNavbarOverlay, setIsShowingNavbarOverlay] = useState(false);

  function toggleNavOverlay() {
    const navbarOverlayBtnSvg = navbarOverlayBtnSvgRef.current;
    const navbarOverlay = navbarOverlayRef.current;
    const navbarOverlayBg = navbarOverlayBgRef.current;
    const navbarOverlayList = navbarOverlayListRef.current;

    if (!navbarOverlay || !navbarOverlayBg) {
      return;
    }

    const timeline = gsap.timeline({ paused: true });
    const navbarOverlayBtnSvgLines =
      navbarOverlayBtnSvg?.querySelectorAll('path');

    timeline
      .fromTo(
        navbarOverlayBtnSvgLines![0] ?? null,
        { translateY: 0 },
        { translateY: -64, duration: 1, ease: 'circ.inOut' },
        0
      )
      .fromTo(
        navbarOverlayBtnSvgLines![1] ?? null,
        { translateY: 0 },
        { translateY: 64, duration: 1, ease: 'circ.inOut' },
        0
      )
      .fromTo(
        navbarOverlay,
        { opacity: 0, visibility: 'hidden' },
        {
          opacity: 1,
          visibility: 'visible',
          duration: 0.75,
          ease: 'circ.inOut',
        },
        0
      )
      .fromTo(
        navbarOverlayBg,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.75, ease: 'circ.inOut' },
        0
      )
      .fromTo(
        navbarOverlayList && gsap.utils.selector(navbarOverlayList)('li'),
        { opacity: 0, filter: `blur(${Constants.FADE_BLUR_INIT_VAL}px)` },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power4.inOut',
          stagger: 0.075,
        },
        0
      );

    if (!isShowingNavbarOverlay) {
      timeline.play();
    } else {
      timeline.timeScale(2).reverse(0);
    }

    setIsShowingNavbarOverlay((prev) => !prev);
  }

  return (
    <>
      <nav className="fixed left-0 top-0 w-full mt-8 z-50" ref={navbarRef}>
        <div className="flex justify-between container">
          <Link className="font-bold text-3xl -tracking-[5px]" href="/">
            {Constants.PAGE_TITLE}
          </Link>

          <button onClick={toggleNavOverlay}>
            <svg
              className="stroke-neutral-400 size-6 sm:size-5"
              ref={navbarOverlayBtnSvgRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288z" />
              <path d="M32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
            </svg>

            {/*<svg className="stroke-neutral-400 size-5"*/}
            {/*     ref={navbarOverlayBtnSvgRef}*/}
            {/*     xmlns="http://www.w3.org/2000/svg"*/}
            {/*     viewBox="0 0 448 512">*/}
            {/*    <path*/}
            {/*        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>*/}
            {/*</svg>*/}
          </button>
        </div>
      </nav>

      {/*Overlay*/}
      <div
        className="fixed inset-0 flex items-center z-40 invisible"
        ref={navbarOverlayRef}
        onClick={toggleNavOverlay}
      >
        <div
          className="absolute inset-0 bg-white z-[-1] origin-top"
          ref={navbarOverlayBgRef}
        ></div>
        <ul
          className="flex flex-col gap-6 container font-semibold text-4xl"
          ref={navbarOverlayListRef}
        >
          <NavbarListItem value="Home" href="/" />
          <NavbarListItem value="Apps (Demo)" href="/#apps" />
          <NavbarListItem value="Blog (Demo)" href="/#blog" />
          <NavbarListItem value="Contact" href={CONTACT_URL} target="_blank" />
          <NavbarListItem value="Legal Notice" href="/legal-notice" />
        </ul>
      </div>
    </>
  );
}
