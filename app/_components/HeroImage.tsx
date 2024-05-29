"use client";

import {gsap} from "gsap";
import {useEffect} from "react";
import BackgroundImage from "@/public/bg.jpg";
import Image from "next/image";

export default function Test() {
    useEffect(() => {
        gsap.to("#headerImageContainer",
            { padding: "1.25rem", scale: 1, opacity: 1 })
            .duration(1.5);
    }, []);

    return (
        <div id="headerImageContainer" className="w-full h-[100vh] absolute top-0 left-0 z-[-1] scale-110 opacity-0">
            <Image className="w-full h-full object-cover pointer-events-none select-none" src={BackgroundImage.src} alt="Background"/>
        </div>
    );
}