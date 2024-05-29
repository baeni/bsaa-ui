"use client";

import {gsap} from "gsap";
import {useEffect} from "react";

export default function Test() {
    useEffect(() => {
        gsap.fromTo("#navbar",
            { opacity: "0", y: "25" },
            { opacity: "1", y: "0" })
            .delay(1)
            .duration(3);
    }, []);

    return (
        <div id="navbar" className="flex h-40 w-full sticky top-0 z-50 opacity-0">
            <div className="inline-flex justify-between items-center container">
                <a className="text-2xl uppercase font-bold text-white" href="/">B.Saa</a>

                <ul className="inline-flex items-center gap-10 px-6 py-3 bg-[#32323225] border border-[#ffffff25] backdrop-blur-sm text-white font-medium rounded-full">
                    <li className="cursor-pointer">Menu</li>
                    <li className="cursor-pointer">Get in Touch</li>
                </ul>
            </div>
        </div>
    );
}