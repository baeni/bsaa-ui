"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Link from "next/link";

export default function Test() {
    useGSAP(() => {
        gsap.fromTo("#navbar",
            { opacity: "0", y: "25" },
            { opacity: "1", y: "0" })
            .delay(1)
            .duration(3);
    });

    return (
        <nav id="navbar" className="flex mt-14 w-full fixed top-0 z-50 mix-blend-difference">
            <div className="inline-flex justify-center md:justify-between items-center container">
                <Link className="text-black font-bold text-3xl -tracking-[5px]" href="/">
                    Bs.
                </Link>

                {/*<a className="hidden md:inline-flex items-center gap-10 px-4 py-2 bg-black text-white font-medium"*/}
                {/*   href="mailto:baeni.saa@gmail.com">Get in Touch</a>*/}
            </div>
        </nav>
    );
}