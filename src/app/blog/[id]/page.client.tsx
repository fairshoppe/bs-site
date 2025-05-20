// src/app/blog/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogPost, Comment } from '@/types/BlogPosts';
import '../blog.css';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch the blog post and comments
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch the article
        const articleResponse = await fetch(`/api/blog/articles?id=${postId}`);
        if (!articleResponse.ok) {
          throw new Error('Failed to fetch article');
        }
        const articleData = await articleResponse.json();
        setPost(articleData);
        
        // Fetch comments
        const commentsResponse = await fetch(`/api/blog/comments?postId=${postId}`);
        if (commentsResponse.ok) {
          const commentsData = await commentsResponse.json();
          setComments(commentsData);
        }
      } catch (err) {
        setError('Failed to load article. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    if (postId) {
      fetchData();
    }
  }, [postId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;
    
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/blog/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: post.id,
          name: newComment.name,
          email: newComment.email,
          content: newComment.content
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }
      
      const newCommentData = await response.json();
      
      // Update local comments state
      setComments([...comments, newCommentData]);
      setNewComment({ name: '', email: '', content: '' });
    } catch (err) {
      setError('Failed to submit your comment. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleShare = (platform: string) => {
    if (typeof window === 'undefined' || !post) return;
    
    const title = post.title;
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="blog-container">
        <div className="loading-spinner">
          <i className="fas fa-spinner"></i>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-container">
        <div className="error-message">
          <p>{error || 'Article not found'}</p>
          <Link href="/blog" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-hero">
        <div className="hero-content">
          <h1>Buteos Systems Blog</h1>
          <p>Insights, tutorials, and updates from our team</p>
        </div>
      </div>

      <div>
        <Link href="/blog" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to all posts
        </Link>
        
        <div className="blog-post">
          <img 
            src={post.image.includes('?') ? post.image : `${post.image}?w=1200&h=600&fit=crop`}
            alt={post.title} 
            className="blog-post-image"
          />
          
          <div className="blog-post-content">
            <h2 className="blog-post-title">{post.title}</h2>
            
            <div className="blog-post-meta">
              <span>
                <i className="fas fa-user"></i>
                {post.author}
              </span>
              <span>
                <i className="fas fa-calendar"></i>
                {post.date}
              </span>
            </div>
            
            <div className="blog-post-body">
              {post.content ? 
                post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
                : 
                <p>{post.excerpt}</p>
              }
            </div>
            
            <div className="share-container">
              <h3 className="share-title">Share this post</h3>
              <div className="share-buttons">
                <button 
                  onClick={() => handleShare('twitter')}
                  className="share-button share-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="share-button share-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="share-button share-linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="share-button share-link"
                >
                  <i className="fas fa-link"></i>
                </button>
              </div>
            </div>
            
            <div className="comments-section">
              <h3 className="comments-title">Comments ({comments.length})</h3>
              
              {comments.length === 0 ? (
                <p className="no-comments">No comments yet. Be the first to comment!</p>
              ) : (
                comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <div className="comment-header">
                      <span className="comment-author">{comment.name}</span>
                      <span className="comment-date">{comment.date}</span>
                    </div>
                    <p className="comment-body">{comment.content}</p>
                  </div>
                ))
              )}
              
              <form onSubmit={handleCommentSubmit} className="comment-form">
                <h4 className="comment-form-title">Leave a comment</h4>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={newComment.name}
                      onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={newComment.email}
                      onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="comment" className="form-label">Comment</label>
                  <textarea
                    id="comment"
                    value={newComment.content}
                    onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner"></i> Posting...
                    </>
                  ) : (
                    'Post Comment'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
