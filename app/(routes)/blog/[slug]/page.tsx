"use client";

import {useState} from "react";
import usePostBySlug from "@/app/_hooks/UsePostBySlug";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Post({ params }: { params: { slug: string } }) {
    dayjs.extend(relativeTime)
    
    const { post, loading } = usePostBySlug(params.slug);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${window.location.origin}/blog/${params.slug}`).then(() => {
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
                <small className="text-neutral-400">
                    Published by {post.user_created.first_name} {dayjs().to(post.date_created)}
                </small>

                <h2 className="text-4xl font-semibold">{post.title}</h2>

                {post.featured_image && (
                    <img className="my-8" src={`https://cms.imgrio.com/assets/${post.featured_image}`} alt="Featured Image"></img>
                )}

                <div className="flex flex-col gap-8 text-neutral-600" dangerouslySetInnerHTML={{__html: post.content}}/>

                <small className="text-neutral-400">
                    <button className="text-neutral-400 hover:text-black transition-colors" onClick={handleCopy}>
                        {!copied
                            ? <span>Copy link to clipboard</span>
                            : <span>Copied to clipboard</span>
                        }
                    </button>
                </small>
            </div>
        </div>
    );
}