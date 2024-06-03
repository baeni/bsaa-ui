"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function HeroSlogan() {
    useGSAP(() => {
        gsap.fromTo(["#slogan"],
            { opacity: "0", scale: "0.95" },
            { opacity: "1", scale: "1" })
            .delay(.5)
            .duration(3);
    });
    
    return (
        <div id="slogan">
            <h1 className="text-6xl md:text-8xl text-white font-bold leading-none pb-8 md:leading-relaxed md:pb-0">Hi, it&apos;s Benny.</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
                I try to build wonderful things as a developer with a little big fetish for design.<br/>
                — Feel free to scroll my site to learn more about me and my recent work.
            </p>
        </div>
    );
}