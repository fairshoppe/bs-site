'use client';

import { useState, useEffect } from 'react';
import './blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  content: string;
  date: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch blog posts on initial load
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blog/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  // Fetch full article and comments when a post is selected
  useEffect(() => {
    if (!selectedPost) return;

    async function fetchArticleAndComments() {
      setLoading(true);
      try {
        // Try to fetch the article directly from the public directory first
        let articleData;
        try {
          const publicResponse = await fetch(`/blog/article-${selectedPost.id}.json`);
          if (publicResponse.ok) {
            articleData = await publicResponse.json();
          }
        } catch (e) {
          console.log('Article not found in public directory, trying API');
        }
        
        // If not found in public directory, try the API
        if (!articleData) {
          const articleResponse = await fetch(`/api/blog/articles?id=${selectedPost.id}`);
          if (articleResponse.ok) {
            articleData = await articleResponse.json();
          }
        }
        
        // Update selected post with full content if we got it
        if (articleData) {
          setSelectedPost(articleData);
        }

        // Fetch comments for this article
        const commentsResponse = await fetch(`/api/blog/comments?postId=${selectedPost.id}`);
        if (commentsResponse.ok) {
          const commentsData = await commentsResponse.json();
          setComments(commentsData);
        }
      } catch (err) {
        setError('Failed to load article details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticleAndComments();
  }, [selectedPost?.id]);

  const handlePostSelect = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost) return;
    
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/blog/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: selectedPost.id,
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
    if (typeof window === 'undefined' || !selectedPost) return;
    
    const title = selectedPost.title;
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

  if (loading && !selectedPost && blogPosts.length === 0) {
    return (
      <div className="blog-container">
        <div className="loading-spinner">
          <i className="fas fa-spinner"></i>
          <p>Loading blog posts...</p>
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

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {selectedPost ? (
        <div>
          <button 
            onClick={() => setSelectedPost(null)}
            className="back-button"
          >
            <i className="fas fa-arrow-left"></i> Back to all posts
          </button>
          
          {loading ? (
            <div className="loading-spinner">
              <i className="fas fa-spinner"></i>
              <p>Loading article...</p>
            </div>
          ) : (
            <div className="blog-post">
              <img 
                src={`${selectedPost.image}?w=1200&h=600&fit=crop`} 
                alt={selectedPost.title} 
                className="blog-post-image"
              />
              
              <div className="blog-post-content">
                <h2 className="blog-post-title">{selectedPost.title}</h2>
                
                <div className="blog-post-meta">
                  <span>
                    <i className="fas fa-user"></i>
                    {selectedPost.author}
                  </span>
                  <span>
                    <i className="fas fa-calendar"></i>
                    {selectedPost.date}
                  </span>
                </div>
                
                <div className="blog-post-body">
                  {selectedPost.content ? 
                    selectedPost.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                    : 
                    <p>{selectedPost.excerpt}</p>
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
          )}
        </div>
      ) : (
        <div>
          <h2 className="content-section h2">Latest Articles</h2>
          
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <img 
                  src={`${post.image}?w=600&h=400&fit=crop`} 
                  alt={post.title} 
                  className="blog-card-image"
                />
                
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  
                  <div className="blog-card-meta">
                    <span>
                      <i className="fas fa-user"></i>
                      {post.author}
                    </span>
                    <span>
                      <i className="fas fa-calendar"></i>
                      {post.date}
                    </span>
                  </div>
                  
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  
                  <button 
                    onClick={() => handlePostSelect(post)}
                    className="blog-card-link"
                  >
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}