import Link from 'next/link';
import Image from 'next/image';

export default function WebPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Core Small Business Website</h1>
            <p>
              Get your business online with a professional, easy-to-manage website. Our basic website package is perfect for small businesses who want to look credible, attract new customers, and make updates without hassle. No tech skills required—just your vision and our expertise!
            </p>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <div className="container">
          <h2>What's Included?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Custom Design</h3>
              <p>Tailored to your brand identity and business goals</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>5 Core Pages</h3>
              <p>Home, About, Services, Contact, and one more of your choice</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile-Friendly</h3>
              <p>Responsive design that works on all devices</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Basic SEO</h3>
              <p>Essential optimization to help customers find you</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Contact Form</h3>
              <p>Easy way for customers to reach you</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-edit"></i>
              </div>
              <h3>Easy Updates</h3>
              <p>Simple content management for your team</p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <h2>Upgrade Your Website</h2>
          <p className="section-intro">Take your online presence to the next level with these powerful enhancements</p>
          
          <div className="upgrade-options">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-shopping-cart"></i>
                  <h3>Starter E-commerce</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Add a simple online store for up to 50 products, with payment gateway integration.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-store"></i>
                  <h3>Advanced E-commerce</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Larger catalog, customer accounts, shipping, and discounts.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-plug"></i>
                  <h3>API Integrations</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Connect your website to other tools or services (e.g., booking, CRM).</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-database"></i>
                  <h3>Custom Backend</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Add a content management system or database for dynamic content.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-users"></i>
                  <h3>User Accounts</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Let customers register and log in for personalized experiences.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-th-large"></i>
                  <h3>CMS Integration</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Use WordPress, Strapi, or another CMS for easy content management.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert-container">
            <div className="alert info">
              <i className="fas fa-info-circle"></i>
              <p>Upgrades require a conversation with our team and can be added at any time.</p>
            </div>
          </div>
          
          <div className="cta-container">
            <Link href="/payment?package=basic-web" className="cta-button">Get Started</Link>
            <Link href="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
