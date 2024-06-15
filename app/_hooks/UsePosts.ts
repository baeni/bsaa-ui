import { useState, useEffect } from "react";
import { Post } from "@/application/models/Post";

const usePosts = (sortField: string = "date_created", sortOrder: SortOrder = SortOrder.Descending) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://cms.imgrio.com/items/posts?fields=*,user_created.*,user_updated.id,user_updated.first_name");
            const data: ApiResponse = await res.json();

            const typedSortField = sortField as keyof Post;
            const sortedPosts = data.data.sort((a, b) => {
                const aValue = a[typedSortField];
                const bValue = b[typedSortField];

                if (aValue === null || aValue === undefined) return 1;
                if (bValue === null || bValue === undefined) return -1;

                if (aValue < bValue) return sortOrder === SortOrder.Ascending ? -1 : 1;
                if (aValue > bValue) return sortOrder === SortOrder.Ascending ? 1 : -1;
                return 0;
            });
            
            setPosts(sortedPosts);
            setLoading(false);
        };

        fetchPosts();
    }, [sortField, sortOrder]);

    return { posts, loading };
};

export interface ApiResponse {
    data: Post[];
}

export enum SortOrder {
    Ascending,
    Descending
}

export default usePosts;