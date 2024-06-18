"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";

export default function HeroSlogan() {
    useGSAP(() => {
        gsap.fromTo("#slogan",
            { opacity: 0, scale: 0.95, filter: "blur(5px)", rotate: 2 },
            { opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 })
            .delay(0.5)
            .duration(3);

        ScrollTrigger.create({
            trigger: "#slogan",
            start: "center+=0.51 center",
            onUpdate: self => {
                gsap.to("#slogan", { opacity: 1 - self.progress, filter: `blur(${10 * self.progress}px)`, rotate: -2.5 * self.progress });
            }
        });
    });
    
    return (
        <div id="slogan" className="flex flex-col gap-6 w-full origin-left mix-blend-color-dodge">
            <h1 className="text-7xl md:text-9xl text-neutral-300 font-bold leading-tight">
                Hello,<br/>
                it&apos;s Benny.
            </h1>
            <p className="text-2xl text-neutral-400 leading-snug">
                I try to build wonderful things<br/>
                as a developer with a little big fetish for design.
            </p>
        </div>
    );
}