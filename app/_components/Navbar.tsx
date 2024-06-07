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
        <nav id="navbar" className="flex mt-14 w-full fixed top-0 z-50">
            <div className="inline-flex justify-center md:justify-between items-center container">
                <Link className="text-2xl uppercase font-bold text-white" href="/">B.Saa</Link>

                <a className="hidden md:inline-flex items-center gap-10 px-6 py-3 bg-[#ffffff90] backdrop-blur-md text-neutral-800 border border-neutral-200 shadow font-medium rounded-2xl hover:scale-105 transition-transform" href="mailto:baeni.saa@gmail.com">Get in Touch</a>
            </div>
        </nav>
    );
}