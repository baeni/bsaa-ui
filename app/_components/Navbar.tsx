"use client";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import * as Constants from "@/app/constants";

export default function Navbar() {
    useGSAP(() => {
        gsap.fromTo("#navbar",
            { opacity: "0", y: "25" },
            { opacity: "1", y: "0" })
            .delay(1)
            .duration(3);
    });

    return (
        <nav id="navbar" className="flex justify-between mt-14 w-full fixed top-0 z-50">
            <Link className="font-bold text-3xl -tracking-[5px]" href="/">
                {Constants.PAGE_TITLE}
            </Link>
        </nav>
    );
}