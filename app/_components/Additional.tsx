"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import usePosts from "@/app/_hooks/UsePosts";
import {Post} from "@/app/_models/Post";

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
        <div className="grid md:grid-cols-2 gap-12">
            {posts.map((post: Post) => (
                <div key={post.title} className="flex flex-col gap-4 text-black cursor-pointer">
                    <h2 className="font-semibold">{post.title}</h2>
                    <p className="text-neutral-600">{post.excerpt.replace(/(<([^>]+)>)/ig, "")}</p>
                    <small className="text-neutral-400">{dayjs().to(post.date)}</small>
                </div>
            ))}
        </div>
    );
}