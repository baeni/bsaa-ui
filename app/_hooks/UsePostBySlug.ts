import { useState, useEffect } from "react";
import { Post } from "@/app/_models/Post";

const usePostBySlug = (slug: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/bsaa0.wordpress.com/posts/slug:${slug}`);
                const data = await res.json();
                setPost(data || null);
            } catch (error) {
                console.error('Error fetching post:', error);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return { post, loading };
};

export interface ApiResponse {
    post: Post
}

export default usePostBySlug;