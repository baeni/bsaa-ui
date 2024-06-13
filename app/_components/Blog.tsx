"use client";

import React, { useState } from "react";
import usePosts from "@/app/_hooks/UsePosts";
import {Post} from "@/app/_models/Post";
import Link from "next/link";

export default function Additional() {
    // const [currentTime, setCurrentTime] = useState(dayjs());
    const { posts, loading } = usePosts();
    
    // .sort((a, b) => b.date - a.date);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentTime(dayjs());
    //     }, 60*1000);
    //
    //     return () => clearInterval(interval);
    // }, []);

    if (loading) {
        return <small className="text-neutral-400">Loading...</small>;
    }
    
    return (
        <div id="blog" className="scroll-mt-32">
            <h3 className="text-neutral-400 font-medium pb-10">Blog</h3>
            <div className="grid md:grid-cols-2 gap-12">
                {posts.map((post: Post) => (
                    <Link key={post.title} className="group flex flex-col gap-4 text-black" href={`/blog/${post.slug}`}>
                        <div className="grid grid-cols-[auto_minmax(1.5rem,1fr)] gap-4 items-center">
                            <h2 className="font-semibold truncate" title={post.title}>{post.title}</h2>
                            <svg
                                className="stroke-neutral-400 size-5 origin-left group-hover:scale-x-125 transition-transform"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                            </svg>
                        </div>
                        {post.thumbnail && (
                            <img className="aspect-[16/10] object-cover"
                                 src={`https://cms.imgrio.com/assets/${post.thumbnail}`} alt="Thumbnail"/>
                        )}
                        <p className="text-neutral-600 whitespace-pre-line">{post.excerpt}</p>
                        <small className="text-neutral-400">
                        Published by {post.user_created.first_name}
                        </small>
                    </Link>
                ))}
            </div>
        </div>
    );
}