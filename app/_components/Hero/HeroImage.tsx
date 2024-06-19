"use client";

import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackgroundImage from "@/public/bg.jpg";

export default function HeroImage() {
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    
    useGSAP(() => {
        const imageWrapper = imageWrapperRef.current;
        const image = imageRef.current;
        
        gsap.registerPlugin(ScrollTrigger);
        
        if (imageWrapper && image) {
            gsap.fromTo(imageWrapper,
                { scale: 1.1, opacity: 0, padding: 0 },
                { scale: 1, opacity: 1, duration: 1.5 }
            );

            ScrollTrigger.create({
                trigger: imageWrapper,
                start: "top top",
                end: "+=25%",
                pin: true,
                onLeave: () => {
                    gsap.to(image, { padding: "0.75rem", duration: 0.175 });
                },
                onEnterBack: () => {
                    gsap.to(image, { padding: "0rem", duration: 0.175 });
                }
            });
        }
    })

    return (
        <div ref={imageWrapperRef} className="w-screen h-screen absolute top-0 left-0 z-[-1]">
            <img ref={imageRef} className="w-full h-full object-cover pointer-events-none select-none"
                 src={BackgroundImage.src} alt="Background"
            />
        </div>
    );
}