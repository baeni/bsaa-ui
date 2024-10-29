"use client";

import React, {useRef} from "react";
import {App} from "@/application/models/App";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import * as Constants from "@/app/constants";

export default function AppCard(props: Props) {
    const cardRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {
        const card = cardRef.current;

        if(card) {
            gsap.fromTo(card,
                { opacity: 0, scale: 0.95, filter: `blur(${Constants.FADE_BLUR_INIT_VAL}px)` },
                { opacity: 1, scale: 1, filter: "blur(0px)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=25%",
                        toggleActions: "play none none reverse"
                    }, ease: "circ.inOut"
                }
            );
        }
    });

    return (
        <Link ref={cardRef} href={`/app/${props.app.title.toLowerCase()}`}>
            <div className="group flex flex-col gap-5 text-black bg-neutral-50 pt-10 px-8 rounded-3xl">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl md:text-3xl font-bold truncate"
                            title={props.app.title}>{props.app.title}</h2>
                        <small
                            className="font-semibold text-neutral-500 bg-neutral-200 px-2 py-1 rounded-full">{props.app.status}</small>
                    </div>
                    <p className="text-lg font-semibold text-neutral-400 whitespace-pre-line leading-snug">{props.app.description}</p>
                </div>
                {props.app.featured_image && (
                    <img className="aspect-[1/1.5] object-cover object-top"
                         src={props.app.featured_image}
                         alt="Thumbnail"/>
                )}
            </div>
            {/*<div>*/}
            {/*    <small className="text-neutral-400">*/}
            {/*        {ReadingTime(props.post.content).text}*/}
            {/*    </small>*/}
            {/*    <div className="grid grid-cols-[auto_minmax(1.5rem,1fr)] gap-3 items-center">*/}
            {/*        <h2 className="text-lg md:text-base font-semibold truncate" title={props.post.title}>{props.post.title}</h2>*/}
            {/*        <svg*/}
            {/*            className="stroke-neutral-400 size-5 origin-left group-hover:scale-x-125 transition-transform"*/}
            {/*            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
            {/*            stroke="currentColor">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*{props.post.featured_image && (*/}
            {/*    <img className="aspect-[16/10] object-cover"*/}
            {/*         src={`https://cms.imgrio.com/assets/${props.post.featured_image}?quality=20`}*/}
            {/*         alt="Thumbnail"/>*/}
            {/*)}*/}
            {/*<p className="text-sm text-neutral-600 whitespace-pre-line">{props.post.excerpt}</p>*/}
            {/*<small className="text-neutral-400">*/}
            {/*    Published by {props.post.user_created.first_name}*/}
            {/*</small>*/}
        </Link>
    );
}

interface Props {
    app: App
}