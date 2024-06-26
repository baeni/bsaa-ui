"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import * as Constants from "@/app/constants";
import {useRef} from "react";

export default function Navbar() {
    const navbarRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const navbar = navbarRef.current;
        
        gsap.fromTo(navbar,
            { opacity: "0", y: "-25" },
            { opacity: "1", y: "0",
                delay: 1, duration: 3, ease: "power4.inOut" });
    });

    return (
        <nav className="fixed mt-8 z-50"
             ref={navbarRef}>
            <Link className="font-bold text-3xl -tracking-[5px]"
                  href="/">
                {Constants.PAGE_TITLE}
            </Link>
        </nav>
    );
}