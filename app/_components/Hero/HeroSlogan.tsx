"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import * as Constants from "@/app/constants";
import {useRef} from "react";

export default function HeroSlogan() {
    const sloganRef = useRef<HTMLDivElement>(null);
    
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const slogan = sloganRef.current;
        
        if (slogan) {
            gsap.fromTo(slogan,
                { opacity: 0, scale: 0.95, filter: `blur(${Constants.FADE_BLUR_INIT_VAL}px)`, rotate: 3 },
                { opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0,
                    delay: 0.5, duration: 2.5, ease: "sine.inOut" });

            ScrollTrigger.create({
                trigger: slogan,
                start: "center+=0.51 center",
                onUpdate: self => {
                    gsap.to(slogan, { opacity: 1 - self.progress, filter: `blur(${10 * self.progress}px)`, rotate: -3 * self.progress });
                }
            });
        }
    });
    
    return (
        <div ref={sloganRef} className="flex flex-col gap-4 md:gap-6 w-full origin-left mix-blend-color-dodge">
            <h1 className="text-5xl md:text-7xl text-neutral-300 font-bold leading-none uppercase">
                Hello,<br/>
                it&apos;s {Constants.NICKNAME}.
            </h1>
            <p className="text-md md:text-xl text-neutral-400 leading-snug text-wrap">
                I try to build wonderful things<br/>
                as a developer with a little big fetish for design.
            </p>
        </div>
    );
}