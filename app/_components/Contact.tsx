"use client";

import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function Contact() {
    const contactWrapperRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const contactWrapper = contactWrapperRef.current;
        const contact = contactRef.current;

        if(contactWrapper && contact) {
            gsap.fromTo(contactWrapper,
                { opacity: 0, scale: 0.95, filter: "blur(5px)", rotate: 2 },
                { opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0, scrollTrigger: {
                        trigger: contact,
                        start: "top bottom",
                        toggleActions: "play none none reset"
                    }, delay: 0.175
                }
            );
        }
    });
    
    return (
        <div ref={contactWrapperRef}>
            <div
                className="flex justify-between items-center p-2 pl-6 bg-neutral-300 bg-opacity-25 backdrop-blur rounded-full drop-shadow-2xl"
                ref={contactRef}>
                <p className="text-xs md:text-sm font-medium">Wanna start something great?</p>
                <a
                    className="px-4 py-2 bg-neutral-300 bg-opacity-25 backdrop-blur rounded-full text-xs md:text-sm font-medium"
                    href="https://t0htfd31vkx.typeform.com/to/R5MK3kJw"
                    target="_blank">
                    Let&apos;s connect!
                </a>
            </div>
        </div>
    );
}