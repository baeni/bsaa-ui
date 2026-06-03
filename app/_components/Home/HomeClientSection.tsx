'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppList from '@/app/_components/Home/App/AppList';
import PostList from '@/app/_components/Home/Blog/PostList';
import Contact from '@/app/_components/Contact';

type HomeClientSectionsProps = {
  showAppsSection: boolean;
  showBlogSection: boolean;
};

export default function HomeClientSections({
  showAppsSection,
  showBlogSection,
}: HomeClientSectionsProps) {
  const [isPostListLoaded, setIsPostListLoaded] = useState(false);

  const handlePostListLoaded = () => {
    setIsPostListLoaded(true);
  };

  return (
    <>
      {/* Apps Showcase */}
      {showAppsSection && (
        <section className="pt-20">
          <div id="apps" className="scroll-mt-20 flex flex-col gap-10">
            <Link className="text-neutral-400 font-medium" href="/#apps">
              Apps
            </Link>
            <AppList />
          </div>
        </section>
      )}

      {/* Blog */}
      {showBlogSection && (
        <section className="pt-20">
          <div id="blog" className="scroll-mt-20 flex flex-col gap-10">
            <Link className="text-neutral-400 font-medium" href="/#blog">
              Blog
            </Link>
            <PostList onLoaded={handlePostListLoaded} />
          </div>
        </section>
      )}

      {/* Contact */}
      {(!showBlogSection || isPostListLoaded) && (
        <section className="py-20">
          <Contact />
        </section>
      )}
    </>
  );
}
