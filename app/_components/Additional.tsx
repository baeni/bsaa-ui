"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Additional() {
    const samplePosts = [
        {
            title: "Lorem ipsum dolor",
            preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in placeat possimus rem repellat sint?",
            content: "",
            date: Date.now()
        },
        {
            title: "Sit amet & consectetur adipisicing",
            preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in placeat possimus rem repellat sint?",
            content: "",
            date: Date.now()
        },
        {
            title: "Elit ercitationem: in placeat",
            preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in placeat possimus rem repellat sint?",
            content: "",
            date: Date.now()
        },
        {
            title: "Possimus rem repellat sint",
            preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in placeat possimus rem repellat sint?",
            content: "",
            date: Date.now()
        },
        {
            title: "Maiores minus - Nesciunt?",
            preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in placeat possimus rem repellat sint?",
            content: "",
            date: Date.now()
        }
    ]
    
    dayjs.extend(relativeTime)
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 60*1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="grid grid-cols-2 gap-12">
            {samplePosts.map((post) => (
                <div key={post.title} className="flex flex-col gap-4 text-black cursor-pointer">
                    <h2 className="font-semibold">{post.title}</h2>
                    <p className="text-neutral-600">{post.preview}</p>
                    <small className="text-neutral-400">{dayjs().to(post.date)}</small>
                </div>
            ))}
        </div>
    );
}