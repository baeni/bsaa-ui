import { useState, useEffect } from 'react';
import { Post } from '@/application/models/Post';
import * as Constants from '@/app/constants';

const usePosts = (
  limit: number | null = null,
  sortField: string = 'date_created',
  sortOrder: SortOrder = SortOrder.Descending
) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `${Constants.API_BASE_URL}/items/posts` +
          '?fields=*,user_created.*,user_updated.id,user_updated.first_name' +
          `&sort=${sortOrder === SortOrder.Descending ? '-' : ''}${sortField}` +
          `&limit=${limit ? limit : -1}`
      );
      const data: ApiResponse = await res.json();

      setPosts(data.data);
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
  Descending,
}

export default usePosts;
