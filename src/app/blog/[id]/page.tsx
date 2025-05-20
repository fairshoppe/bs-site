'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import BlogPage from '../page';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id;
  
  // This component just redirects to the main blog page with a URL parameter
  useEffect(() => {
    if (postId) {
      // We'll use a URL parameter to tell the main blog page which post to show
      router.push(`/blog?postId=${postId}`);
    }
  }, [postId, router]);
  
  return <BlogPage />;
}
