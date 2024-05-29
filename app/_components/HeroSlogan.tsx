"use client";

import {gsap} from "gsap";
import {useEffect} from "react";

export default function HeroSlogan() {
    useEffect(() => {
        gsap.fromTo(["#slogan"],
            { opacity: "0", x: "-25" },
            { opacity: "1", x: "0" })
            .delay(0.5)
            .duration(2);

        const lines = document.querySelectorAll("#sloganSub span");
        gsap.fromTo(lines,
            { opacity: 0, x: -25 },
            { opacity: 1, x: 0, stagger: .1 })
            .delay(1.575)
            .duration(2);
    }, []);
    
    return (
        <div>
            <h1 id="slogan" className="text-8xl text-white font-bold leading-relaxed">Hi, it's Benny.</h1>
            <p id="sloganSub" className="text-lg text-neutral-300 leading-relaxed">
                <span>I try to build wonderful things as a developer with a little big fetish for design.</span>
                <span>Feel free to scroll my site to learn more about me and my recent work.</span>
            </p>
        </div>
    );
}