import Link from 'next/link';
import Image from 'next/image';

export default function MobilePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Core Small Business Mobile App</h1>
            <p>
              Put your business in your customers' pockets! Our basic mobile app package is perfect for small businesses who want to offer easy access, boost engagement, and stay top-of-mind. No tech jargon—just a simple, effective app for your business.
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
                <i className="fas fa-palette"></i>
              </div>
              <h3>Custom Design</h3>
              <p>Branded interface that reflects your business identity</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Cross-Platform</h3>
              <p>Works on both iOS and Android devices</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-th-large"></i>
              </div>
              <h3>5 Core Screens</h3>
              <p>Essential features your customers need</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-lock"></i>
              </div>
              <h3>User Authentication</h3>
              <p>Basic login functionality if needed</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-upload"></i>
              </div>
              <h3>App Store Deployment</h3>
              <p>We'll help get your app published</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-sync"></i>
              </div>
              <h3>Revision Round</h3>
              <p>Fine-tune your app before launch</p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <h2>Upgrade Your Mobile Experience</h2>
          <p className="section-intro">Enhance your app with these powerful features to better serve your customers</p>
          
          <div className="upgrade-options">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-shopping-cart"></i>
                  <h3>In-App E-commerce</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Sell products directly in your app with a simple cart and payment gateway.</p>
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
                  <p>Larger catalog, search/filter, customer accounts, order history.</p>
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
                  <p>Social login, analytics, maps, and more.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-bell"></i>
                  <h3>Push Notifications</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Send updates and offers directly to users' phones.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-wifi"></i>
                  <h3>Offline Access</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Let users access key features even without internet.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-language"></i>
                  <h3>Multilingual</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Offer your app in multiple languages.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-robot"></i>
                  <h3>In-App Chatbot</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Add AI-powered support or guidance.</p>
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
            <Link href="/payment?package=basic-mobile" className="cta-button">Get Started</Link>
            <Link href="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
