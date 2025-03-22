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
                    delay: 0.5, duration: 1.5, ease: "sine.inOut" });

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
        <div ref={sloganRef} className="flex flex-col gap-6 md:gap-8 w-full origin-left mix-blend-color-dodge">
            <h1 className="text-5xl md:text-7xl text-neutral-300 font-bold leading-none uppercase">
                Hi there,<br/>
                it&apos;s
                <span className="ml-6 text-5xl md:text-7xl text-neutral-300 font-bold leading-none font-[Amettasignature]">
                    {Constants.NICKNAME}.
                </span>
            </h1>
            <p className="text-md md:text-xl text-neutral-400 leading-snug text-wrap">
                Crafting beautiful code with a passion for design.<br/>
                The Blog posts below are <span className="line-through">not</span> only visually appealing.
            </p>
        </div>
    );
}