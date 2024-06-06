"use client";

import {gsap} from "gsap";
import{useGSAP} from "@gsap/react";
import dayjs from "dayjs";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Test() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.create({
            trigger: "footer",
            start: "10% bottom",
            onLeave: () => {
                gsap.to("footer", { opacity: 0, duration: 1 });
            },
            onEnterBack: () => {
                gsap.to("footer", { opacity: 1, duration: 1 });
            }
        });
    });

    return (
        <footer id="footer" className="bg-white">
            <div className="container text-sm py-10 flex justify-between">
                <ul className="inline-flex gap-2">
                    <li><a className="text-neutral-400 font-medium underline decoration-dotted"
                           href="mailto:baeni.saa@gmail.com">Contact</a></li>
                    <li><a className="text-neutral-400 font-medium underline decoration-dotted"
                           href="">Legal</a></li>
                </ul>

                <p className="text-neutral-400 text-sm">Copyright &copy; {dayjs().year()}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}