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
        <div id="slogan" className="w-full origin-left">
            <h1 className="text-6xl md:text-8xl text-white font-bold leading-none pb-8 md:leading-relaxed md:pb-0">Hi, it&apos;s Benny.</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
                I try to build wonderful things as a developer with a little big fetish for design.<br/>
                — Feel free to <Link className="underline decoration-dotted" href="#blog">explore my Blog</Link> about things I do.
            </p>
        </div>
    );
}