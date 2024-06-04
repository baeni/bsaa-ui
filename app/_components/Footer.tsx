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
            <div className="container text-sm text-center py-10">
                <p className="text-sm">Copyright &copy; {dayjs().year()}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}