'use client';

import React, { useEffect } from 'react';
import usePosts, { SortOrder } from '@/app/_hooks/UsePosts';
import { Post } from '@/application/models/Post';
import PostCard from '@/app/_components/Blog/PostCard';

export default function PostsList(props: Props) {
  const { posts, loading } = usePosts(
    props.limit,
    'date_created',
    SortOrder.Descending
  );

  useEffect(() => {
    if (!loading) {
      props.onLoaded && props.onLoaded();
    }
  }, [loading, props.onLoaded]);

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {loading ? (
        <small className="text-neutral-400">Loading...</small>
      ) : (
        posts.map((post: Post) => <PostCard post={post} key={post.id} />)
      )}
    </div>
  );
}

interface Props {
  limit?: number;
  onLoaded?: () => void;
}
