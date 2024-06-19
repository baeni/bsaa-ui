"use client";

import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import * as Constants from "@/app/constants";

export default function Contact() {
    const contactWrapperRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const contactWrapper = contactWrapperRef.current;
        const contact = contactRef.current;

        if(contactWrapper && contact) {
            gsap.fromTo(contactWrapper,
                { opacity: 0, scale: 0.95, filter: "blur(5px)" },
                { opacity: 1, scale: 1, filter: "blur(0px)", scrollTrigger: {
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
                className="flex justify-between items-center p-2 pl-6 bg-gradient-to-tr from-neutral-200 to-neutral-50 bg-opacity-25 backdrop-blur border border-neutral-200 rounded-full drop-shadow"
                ref={contactRef}>
                <p className="block md:hidden text-xs md:text-sm font-medium">Wanna grow together?</p>
                <p className="hidden md:block text-sm font-medium">Wanna build something great together?</p>

                <a
                    className="px-4 py-2 bg-neutral-400 bg-opacity-25 hover:bg-opacity-35 transition-all duration-300 backdrop-blur rounded-full text-xs md:text-sm font-medium text-nowrap"
                    href={Constants.CONTACT_URL}
                    target="_blank">
                    Let&apos;s connect!
                </a>
            </div>
        </div>
    );
}