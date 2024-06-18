import HeroImage from "../_components/Hero/HeroImage";
import HeroSlogan from "../_components/Hero/HeroSlogan";
import React from "react";
import PostList from "@/app/_components/Blog/PostList";
import Link from "next/link";

export default function Home() {
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
                    <PostList />
                </div>
            </section>
            
            {/* Contact */}
            <section className="pb-20">
                <div className="flex justify-between items-center p-2 pl-6 bg-neutral-300 bg-opacity-25 backdrop-blur rounded-full">
                    <p className="font-medium">Wanna start something great?</p>
                    <a className="px-4 py-2 bg-neutral-300 bg-opacity-25 backdrop-blur rounded-full font-medium" href="mailto:baeni.saa@gmail.com">Let&apos;s connect!</a>
                </div>
            </section>
        </div>
    );
}
