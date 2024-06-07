"use client";

import usePostBySlug from "@/app/_hooks/UsePostBySlug";
import dayjs from "dayjs";

export default function Post({ params }: { params: { slug: string } }) {
    const { post, loading } = usePostBySlug(params.slug);

    if (loading) {
        return <small className="text-neutral-400">Loading...</small>;
    }
    
    return post ? (
        <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4 text-black cursor-pointer">
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-neutral-600">{post.content.replace(/(<([^>]+)>)/ig, "")}</p>
                <small className="text-neutral-400">{dayjs(post.date).format("DD.MM.YYY")}</small>
            </div>
        </div>
    ) : (
        <p>Post not found</p>
    );
}