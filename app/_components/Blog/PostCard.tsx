"use client";

import React, {useRef} from "react";
import {Post} from "@/application/models/Post";
import Link from "next/link";
import ReadingTime from "reading-time";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function PostCard(props: Props) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    
    useGSAP(() => {
        const card = cardRef.current;
        
        if(card) {
            gsap.fromTo(card,
                { opacity: 0, scale: 0.95, filter: "blur(5px)" },
                { opacity: 1, scale: 1, filter: "blur(0px)", scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        toggleActions: "play none none reset"
                    }, delay: 0.25
                }
            );
        }
    });
    
    return (
        <Link ref={cardRef} className="group flex flex-col gap-4 text-black" href={`/blog/${props.post.slug}`}>
            <div>
                <small className="text-neutral-400">
                    {ReadingTime(props.post.content).text}
                </small>
                <div className="grid grid-cols-[auto_minmax(1.5rem,1fr)] gap-3 items-center">
                    <h2 className="text-lg md:text-base font-semibold truncate" title={props.post.title}>{props.post.title}</h2>
                    <svg
                        className="stroke-neutral-400 size-5 origin-left group-hover:scale-x-125 transition-transform"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                    </svg>
                </div>
            </div>
            {props.post.featured_image && (
                <img className="aspect-[16/10] object-cover"
                     src={`https://cms.imgrio.com/assets/${props.post.featured_image}?quality=20`} alt="Thumbnail"/>
            )}
            <p className="text-sm text-neutral-600 whitespace-pre-line">{props.post.excerpt}</p>
            <small className="text-neutral-400">
                Published by {props.post.user_created.first_name}
            </small>
        </Link>
    );
}

interface Props {
    post: Post
}