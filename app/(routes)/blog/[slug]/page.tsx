"use client";

import usePostBySlug from "@/app/_hooks/UsePostBySlug";
import dayjs from "dayjs";

export default function Post({ params }: { params: { slug: string } }) {
    const { post, loading } = usePostBySlug(params.slug);
    
    if (loading) {
        return <small className="text-neutral-400">Loading...</small>;
    }
    
    if (!post) {
        return <small className="text-neutral-400">Loading...</small>;
    }

    return (
        <div className="container mt-40">
            <div className="flex flex-col gap-4 text-black">
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-neutral-600">{post.content.replace(/(<([^>]+)>)/ig, "")}</p>
                <small className="text-neutral-400">Published on {dayjs(post.date).format("DD.MM.YYYY [at] HH:MM")} by {post.author.name}</small>
            </div>
        </div>
    );
}