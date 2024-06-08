"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import usePosts from "@/app/_hooks/UsePosts";
import {Post} from "@/app/_models/Post";
import Link from "next/link";
import Image from "next/image";

export default function Additional() {
    dayjs.extend(relativeTime)
    
    const [currentTime, setCurrentTime] = useState(dayjs());
    const { posts, loading } = usePosts();
    
    // .sort((a, b) => b.date - a.date);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 60*1000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <small className="text-neutral-400">Loading...</small>;
    }
    
    return (
        <div id="blog" className="grid md:grid-cols-2 gap-12">
            {posts.map((post: Post) => (
                <Link key={post.title} className="group flex flex-col gap-4 text-black" href={`/blog/${post.slug}`}>
                    <div className="inline-flex gap-4 items-center">
                        <h2 className="font-semibold">{post.title}</h2>
                        <svg className="stroke-neutral-400 size-5 origin-left transition-transform group-hover:scale-x-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                        </svg>
                    </div>
                    {/*{post.post_thumbnail && (*/}
                    {/*    <Image src={post.post_thumbnail.URL} alt="Thumbnail" width={post.post_thumbnail.width} height={post.post_thumbnail.height}></Image>*/}
                    {/*)}*/}
                    <p className="text-neutral-600">{post.excerpt.replace(/(<([^>]+)>)/ig, "")}</p>
                    <small className="text-neutral-400">
                        {dayjs().to(post.date)} by {post.author.name}
                    </small>
                </Link>
            ))}
        </div>
    );
}