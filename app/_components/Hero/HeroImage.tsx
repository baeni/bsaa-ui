"use client";

import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackgroundImage from "@/public/bg.jpg";

export default function HeroImage() {
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const imageWrapper = imageWrapperRef.current;
        const image = imageRef.current;
        
        if (imageWrapper && image) {
            gsap.fromTo(image,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1,
                    duration: 3.75, ease: "sine.inOut" }
            );

            ScrollTrigger.create({
                trigger: imageWrapper,
                start: "top top",
                end: "+=25%",
                pin: true,
                anticipatePin: 0.25,
                onLeave: () => {
                    gsap.to(image, { padding: "0.75rem",
                        duration: 0.5 });
                },
                onEnterBack: () => {
                    gsap.to(image, { padding: "0rem",
                        duration: 0.125 });
                }
            });

            ScrollTrigger.create({
                trigger: image,
                start: "+=25%",
                onUpdate: self => {
                    gsap.to(image, { filter: `brightness(${0.75 + self.progress}) grayscale(${1.5 * self.progress})` });
                }
            });
        }
    })

    return (
        <div ref={imageWrapperRef} className="w-screen h-screen absolute inset-0 -z-10">
            <img ref={imageRef}
                 className="w-full h-full object-cover pointer-events-none select-none brightness-75"
                 src={BackgroundImage.src}
                 alt="Background"
            />
        </div>
    );
}