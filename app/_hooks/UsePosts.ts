import { useState, useEffect } from "react";
import { Post } from "@/app/_models/Post";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/bsaa0.wordpress.com/posts/");
            const data: ApiResponse = await res.json();
            setPosts(data.posts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return { posts, loading };
};

export interface ApiResponse {
    found: number;
    posts: Post[];
    meta: {
        links: {
            counts: string;
        };
        wpcom: boolean;
    };
}

export default usePosts;