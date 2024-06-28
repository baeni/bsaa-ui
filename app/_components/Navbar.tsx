"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import * as Constants from "@/app/constants";
import {useRef, useState} from "react";
import {CONTACT_URL} from "@/app/constants";

export default function Navbar() {
    const navbarRef = useRef<HTMLDivElement>(null);
    const navbarOverlayRef = useRef<HTMLDivElement>(null);
    const navbarOverlayBgRef = useRef<HTMLDivElement>(null);
    const navbarOverlayListRef = useRef<HTMLUListElement>(null);
    
    useGSAP(() => {
        const navbar = navbarRef.current;
        
        gsap.fromTo(navbar,
            { opacity: "0", y: "-25" },
            { opacity: "1", y: "0",
                delay: 1, duration: 3, ease: "power4.inOut" });
    });

    const [isShowingNavbarOverlay, setIsShowingNavbarOverlay] = useState(false);
    
    function toggleNavOverlay() {
        const navbarOverlay = navbarOverlayRef.current;
        const navbarOverlayBg = navbarOverlayBgRef.current;
        const navbarOverlayList = navbarOverlayListRef.current;

        if (!navbarOverlay || !navbarOverlayBg) {
            return;
        }
        
        const timeline = gsap.timeline({ paused: true });

        timeline.fromTo(navbarOverlay,
            { opacity: 0, visibility: 'hidden' },
            { opacity: 1, visibility: 'visible', duration: 1, ease: 'circ.inOut'
            }, 0).fromTo(navbarOverlayList,
            { filter: `blur(${Constants.FADE_BLUR_INIT_VAL}px)` },
            { filter: 'blur(0px)', duration: 1, ease: 'circ.inOut'
            }, 0).fromTo(navbarOverlayBg,
            { scaleY: 0 },
            { scaleY: 1, duration: 1, ease: 'circ.inOut'
            }, 0);
        
        if(!isShowingNavbarOverlay) {
            timeline.play();
        } else {
            timeline.reverse(0);
        }

        setIsShowingNavbarOverlay(prev => !prev);
    }

    return (
        <>
            <nav className="fixed left-0 top-0 w-full mt-8 z-50"
                 ref={navbarRef}>
                <div className="flex justify-between container">
                    <Link className="font-bold text-3xl -tracking-[5px]"
                          href="/">
                        {Constants.PAGE_TITLE}
                    </Link>

                    <button onClick={toggleNavOverlay}>
                        asdf
                    </button>
                </div>
            </nav>

            {/*Overlay*/}
            <div className="fixed inset-0 flex items-center z-40 invisible"
                 ref={navbarOverlayRef}
                 onClick={toggleNavOverlay}>
                <ul className="flex flex-col gap-6 container font-semibold text-4xl"
                    ref={navbarOverlayListRef}>
                    <li><a href={CONTACT_URL} target="_blank">Contact</a></li>
                    <li><Link href="/legal">Imprint</Link></li>
                </ul>
                <div className="absolute inset-0 bg-white z-[-1] origin-top"
                     ref={navbarOverlayBgRef}></div>
            </div>
        </>
    );
}