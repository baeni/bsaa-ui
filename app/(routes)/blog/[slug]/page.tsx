"use client";

import {useState} from "react";
import usePostBySlug from "@/app/_hooks/UsePostBySlug";
import dayjs from "dayjs";

export default function Post({ params }: { params: { slug: string } }) {
    const { post, loading } = usePostBySlug(params.slug);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://localhost:3000/blog/${params.slug}`).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000);
        });
    };
    
    if (loading) {
        return <small className="text-neutral-400">Loading...</small>;
    }
    
    if (!post) {
        return <small className="text-neutral-400">Error</small>;
    }

    return (
        <div className="container mt-40">
            <div className="flex flex-col gap-4 text-black">
                <h2 className="font-semibold">{post.title}</h2>

                <small className="text-neutral-400">
                    <button className="text-neutral-400 hover:text-black transition-colors" onClick={handleCopy}>
                        {!copied ? (
                            <span>Copy link to clipboard</span>
                        ) : (
                            <span>Copied to clipboard</span>
                        )}
                    </button>
                </small>
            </div>

            {/*<div className="flex flex-col gap-4 text-black">*/}
            {/*    <h2 className="font-semibold">{post.title}</h2>*/}

            {/*    <small className="text-neutral-400">*/}
            {/*        Published on {dayjs(post.date).format("DD.MM.YYYY [at] HH:MM")} by {post.author.name}*/}
            {/*    </small>*/}

            {/*    <div className="text-neutral-600 wp-formatting">*/}
            {/*        {post.featured_image && (*/}
            {/*            <img src={post.featured_image} alt="Featured Image"></img>*/}
            {/*        )}*/}

            {/*        <div dangerouslySetInnerHTML={{__html: post.content}}/>*/}
            {/*    </div>*/}

            {/*    <small className="text-neutral-400">*/}
            {/*        <button className="text-neutral-400 hover:text-black transition-colors" onClick={handleCopy}>*/}
            {/*            {!copied ? (*/}
            {/*                <span>Copy link to clipboard</span>*/}
            {/*            ) : (*/}
            {/*                <span>Copied to clipboard</span>*/}
            {/*            )}*/}
            {/*        </button>*/}
            {/*    </small>*/}
            {/*</div>*/}
        </div>
    );
}