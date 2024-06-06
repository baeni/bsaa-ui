"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackgroundImage from "@/public/bg.jpg";
import Image from "next/image";

export default function Test() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.from("#heroImageContainer",
            { scale: 1.1, opacity: 0, padding: 0 });

        gsap.to("#heroImageContainer",
            { scale: 1, opacity: 1 })
            .duration(1.5);

        ScrollTrigger.create({
            trigger: "#heroImageContainer",
            start: "top top",
            end: "+=25%",
            pin: true,
            onLeave: () => {
                gsap.to("#heroImage", { padding: "0.75rem", duration: 0.175 });
            },
            onEnterBack: () => {
                gsap.to("#heroImage", { padding: "0rem", duration: 0.175 });
            }
        });
    })

    return (
        <div id="heroImageContainer" className="w-screen h-screen absolute top-0 left-0 z-[-1]">
            <img id="heroImage" className="w-full h-full object-cover pointer-events-none select-none"
                 src={BackgroundImage.src} alt="Background"
            />
        </div>
    );
}