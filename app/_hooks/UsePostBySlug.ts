import { useState, useEffect } from "react";
import { Post } from "@/application/models/Post";
import { ApiResponse } from "@/app/_hooks/UsePosts";

const usePostBySlug = (slug: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://cms.imgrio.com/items/posts?filter={"slug": {"_eq": "${slug}"}}&fields=*,user_created.*,user_updated.*`);
                const data: ApiResponse = await res.json();
                setPost(data.data[0] || null);
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

export default usePostBySlug;