import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/BlogPosts"

// Add this async function to fetch the latest blog post
// Add this async function to fetch the latest blog post
async function getLatestBlogPost(): Promise<BlogPost | null> {
  try {
    // Use absolute URL for server components
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://buteossystems.com';
    const apiUrl = new URL('/api/blog/articles', baseUrl).toString();
    
    const response = await fetch(apiUrl, { cache: 'no-store' });
    if (!response.ok) return null;
    
    const posts = await response.json();
    if (!posts || !posts.length) return null;
    
    // Sort by ID in descending order and get the first one
    return posts.sort((a: BlogPost, b: BlogPost) => b.id - a.id)[0];
  } catch (error) {
    console.error('Error fetching latest blog post:', error);
    return null;
  }
}


export default async function Home() {
  // Fetch the latest blog post
  const latestPost = await getLatestBlogPost();

  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Elevate Your Business: Stunning Websites & Mobile Apps</h1>
            <p>Full-stack software engineering delivering seamless web and mobile design, development, and deployment for businesses ready to thrive online.</p>
          </div>
        </div>
      </section>

      {/* Add the latest blog post section */}
      {latestPost && (
        <section className="content-section">
          <div className="container">
            <h2>Latest from Our Blog</h2>
            <div className="blog-preview-card">
              <div className="blog-preview-image">
                <img 
                  src={
                    // Handle both old and new image formats
                    latestPost.main_image?.file_url || 
                    latestPost.image || 
                    '/default-blog-image.jpg'
                  } 
                  alt={
                    latestPost.main_image?.alt_text || 
                    latestPost.title
                  }
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
              <div className="blog-preview-content">
                <h3>{latestPost.title}</h3>
                <div className="blog-meta">
                  <span><i className="fas fa-user"></i> {latestPost.author}</span>
                  <span><i className="fas fa-calendar"></i> {latestPost.date}</span>
                </div>
                <p>{latestPost.excerpt}</p>
                <Link 
                  href={latestPost.slug ? `/blog/${latestPost.slug}` : `/blog?postId=${latestPost.id}`} 
                  className="cta-button"
                >
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}



      <section id="web-design" className="content-section">
        <div className="container">
          <h2>Powering Small Businesses Online: Professional Websites That Work</h2>
          <p className="section-intro">In today's digital world, a compelling online presence is non-negotiable. At Buteos Systems, we specialize in creating affordable, high-impact websites tailored for small businesses. We handle everything from design to deployment, making it easy for you to shine online and connect with your customers.</p>
          <div className="features-grid">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-users"></i>
                  <h3>Attract More Customers</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Eye-catching designs that convert visitors.</p>
                  <a href="/web">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-clock"></i>
                  <h3>Save Time & Hassle</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>We manage the tech, so you can focus on your business.</p>
                  <a href="/web">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-link"></i>
                  <h3>Seamless Integration</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Connect to your essential tools (e.g., Google Maps, Facebook, Instagram).</p>
                  <a href="/web">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mobile-apps" className="content-section alt-bg">
        <div className="container">
          <h2>Go Mobile: Apps Designed for Impact</h2>
          <div className="mobile-subsection">
            <h3>Your Business in Their Pocket: Essential Mobile Apps</h3>
            <p>Give your small business a dedicated mobile presence. We create streamlined, user-friendly apps that make it easy for customers to connect with you, access your services, and stay engaged on the go. Perfect for appointment booking, information sharing, and loyalty programs.</p>
            <div className="features-grid">
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <i className="fas fa-comments"></i>
                    <h3>Direct Customer Channel</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>Communicate offers and updates instantly.</p>
                    <a href="/mobile">Read More</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <i className="fas fa-mobile-alt"></i>
                    <h3>Enhanced Accessibility</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>Services at their fingertips.</p>
                    <a href="/mobile">Read More</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <i className="fas fa-heart"></i>
                    <h3>Brand Loyalty</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>A permanent spot on their home screen.</p>
                    <a href="/mobile">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-phone-agents" className="content-section">
        <div className="container">
          <h2>AI Phone Agents: Your Virtual Assistant</h2>
          <p className="section-intro">Enhance your customer service with our AI Phone Agents. These virtual assistants can handle scheduling, ordering, and provide company information, making it easier for your customers to interact with your business.</p>
          <div className="features-grid">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-robot"></i>
                  <h3>Automated Scheduling</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Let AI handle your appointments and bookings.</p>
                  <a href="/agent">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-shopping-cart"></i>
                  <h3>Ordering Made Simple</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Streamline the ordering process with AI assistance.</p>
                  <a href="/agent">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-info-circle"></i>
                  <h3>Company Information</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Provide instant answers to common questions.</p>
                  <a href="/agent">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="custom-software" className="content-section alt-bg">
        <div className="container">
          <h2>Custom Software Solutions</h2>
          <p className="section-intro">Tailored software solutions designed to meet your unique business needs. Our custom software development services ensure that your business processes are streamlined and efficient.</p>
          <div className="features-grid">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-cogs"></i>
                  <h3>Tailored Solutions</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Custom software designed to fit your specific requirements.</p>
                  <a href="/custom">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-chart-line"></i>
                  <h3>Scalable & Efficient</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Build for growth with scalable and efficient software.</p>
                  <a href="/custom">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-headset"></i>
                  <h3>Dedicated Support</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Ongoing support and maintenance for your custom software.</p>
                  <a href="/custom">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact" className="cta-button">Contact Us for Custom Solutions</Link>
        </div>
      </section>

      <section id="why-us" className="content-section">
        <div className="container">
          <h2>Your Full-Stack Partner</h2>
          <p className="section-intro">Buteos Systems offers end-to-end solutions. This means a single point of contact, a cohesive strategy, and a deep understanding of every layer of your project – from user interface to server deployment. We're passionate about clean code, intuitive design, and delivering results that matter.</p>
          <ul className="benefits-list">
            <li><i className="fas fa-check-circle"></i> Holistic Development Approach</li>
            <li><i className="fas fa-check-circle"></i> Seamless Design & Implementation</li>
            <li><i className="fas fa-check-circle"></i> Dedicated & Transparent Service</li>
            <li><i className="fas fa-check-circle"></i> Future-Proof Technologies</li>
          </ul>
        </div>
      </section>

      <section id="cta" className="content-section alt-bg">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join the businesses already thriving with our web and mobile solutions.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button">Contact Us</Link>
            <Link href="/pricing" className="cta-button">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
