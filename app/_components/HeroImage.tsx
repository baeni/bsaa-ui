"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackgroundImage from "@/public/bg.jpg";
import Image from "next/image";

export default function Test() {
    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(() => {
        gsap.from("#heroImageContainer",
            { scale: 1.1, opacity: 0 });

        gsap.to("#heroImageContainer",
            { scale: 1, opacity: 1 })
            .duration(1.5);

        ScrollTrigger.create({
            trigger: "#heroImageContainer",
            start: "top top",
            endTrigger: "footer",
            end: "top bottom",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            onLeave: () => {
                gsap.to("#heroImage", { padding: "0", duration: .1 });
            },
            onEnterBack: () => {
                gsap.to("#heroImage", { padding: "0.75rem", duration: .1 });
            }
        });
    })

    return (
        <div id="heroImageContainer" className="w-full h-full flex justify-center items-center absolute top-0 left-0 z-[-1] scale-100 opacity-100">
            <img id="heroImage" className="w-full h-full object-cover p-3 pointer-events-none select-none"
                 src={BackgroundImage.src} alt="Background"
            />
        </div>
    );
}