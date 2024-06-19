"use client";

import HeroImage from "../_components/Hero/HeroImage";
import HeroSlogan from "../_components/Hero/HeroSlogan";
import React, {useState} from "react";
import PostList from "@/app/_components/Blog/PostList";
import Link from "next/link";
import Contact from "@/app/_components/Contact";

export default function Home() {
    const [isPostListLoaded, setIsPostListLoaded] = useState(false);

    const handlePostListLoaded = () => {
        setIsPostListLoaded(true);
    };
    
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="h-screen flex items-center">
                <HeroImage />
                <HeroSlogan />
            </section>

            {/* Blog Preview */}
            <section className="mt-[25vh] py-20">
                <div id="blog" className="scroll-mt-10 flex flex-col gap-10">
                    <Link className="text-neutral-400 font-medium" href="/blog">Blog</Link>
                    <PostList onLoaded={handlePostListLoaded} />
                </div>
            </section>
            
            {/* Contact */}
            {isPostListLoaded && (
                <section className="pb-20">
                    <Contact />
                </section>
            )}
        </div>
    );
}
