"use client";

import HeroImage from "../_components/Hero/HeroImage";
import HeroSlogan from "../_components/Hero/HeroSlogan";
import React, {useState} from "react";
import PostList from "@/app/_components/Blog/PostList";
import Link from "next/link";
import Contact from "@/app/_components/Contact";
import AppList from "@/app/_components/Apps/AppList";

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
            
            {/* Apps Showcase*/}
            <section className="mt-[25vh] pt-20">
                <div id="apps" className="scroll-mt-20 flex flex-col gap-10">
                    <Link className="text-neutral-400 font-medium" href="#apps">Apps</Link>
                    <AppList />
                </div>
            </section>

            {/* Blog */}
            <section className="pt-20">
                <div id="blog" className="scroll-mt-20 flex flex-col gap-10">
                    <Link className="text-neutral-400 font-medium" href="#blog">Blog</Link>
                    <PostList onLoaded={handlePostListLoaded} />
                </div>
            </section>
            
            {/* Contact */}
            {isPostListLoaded && (
                <section className="py-20">
                    <Contact />
                </section>
            )}
        </div>
    );
}
