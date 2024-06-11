import { useState, useEffect } from "react";
import { Post } from "@/app/_models/Post";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://cms.imgrio.com/items/posts?fields=*,user_created.*,user_updated.*");
            const data: ApiResponse = await res.json();
            setPosts(data.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return { posts, loading };
};

export interface ApiResponse {
    data: Post[];
}

export default usePosts;