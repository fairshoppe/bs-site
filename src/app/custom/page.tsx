import Link from 'next/link';
import Image from 'next/image';

export default function CustomPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Template vs. Custom Design: What's Right for Your Business?</h1>
            <p>
              Choosing between a template and a custom design is a big decision for any business. Here's how each option impacts your brand, growth, and long-term success.
            </p>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <div className="container">
          <h2>Key Differences</h2>
          <p className="section-intro">Understanding these fundamental differences will help you make the right choice for your business needs</p>
          
          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="comparison-header">
                <i className="fas fa-fingerprint"></i>
                <h3>Uniqueness & Brand Identity</h3>
              </div>
              <div className="comparison-content">
                <div className="option">
                  <h4>Template</h4>
                  <p>Shared look and feel with many others. Limited ability to stand out.</p>
                </div>
                <div className="option highlight">
                  <h4>Custom</h4>
                  <p>Built from scratch for your brand—unique, memorable, and authoritative.</p>
                </div>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <i className="fas fa-expand-arrows-alt"></i>
                <h3>Flexibility & Scalability</h3>
              </div>
              <div className="comparison-content">
                <div className="option">
                  <h4>Template</h4>
                  <p>Limited by predefined structure. Can become restrictive as you grow.</p>
                </div>
                <div className="option highlight">
                  <h4>Custom</h4>
                  <p>Fully flexible and scalable. Adapts to your needs and market changes.</p>
                </div>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <i className="fas fa-clock"></i>
                <h3>Development Time</h3>
              </div>
              <div className="comparison-content">
                <div className="option highlight">
                  <h4>Template</h4>
                  <p>Fast to launch—days or weeks.</p>
                </div>
                <div className="option">
                  <h4>Custom</h4>
                  <p>More involved—weeks to months for a truly tailored solution.</p>
                </div>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <i className="fas fa-dollar-sign"></i>
                <h3>Cost</h3>
              </div>
              <div className="comparison-content">
                <div className="option highlight">
                  <h4>Template</h4>
                  <p>Lower upfront cost, but may limit long-term growth.</p>
                </div>
                <div className="option">
                  <h4>Custom</h4>
                  <p>Higher initial investment, but better ROI through performance, branding, and scalability.</p>
                </div>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <i className="fas fa-search"></i>
                <h3>SEO Optimization</h3>
              </div>
              <div className="comparison-content">
                <div className="option">
                  <h4>Template</h4>
                  <p>May have bloated code and generic SEO. Harder to optimize for your needs.</p>
                </div>
                <div className="option highlight">
                  <h4>Custom</h4>
                  <p>Clean, optimized code and structure for the best search rankings and organic traffic.</p>
                </div>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <i className="fas fa-users"></i>
                <h3>User Experience (UX)</h3>
              </div>
              <div className="comparison-content">
                <div className="option">
                  <h4>Template</h4>
                  <p>General best practices, but not tailored to your audience.</p>
                </div>
                <div className="option highlight">
                  <h4>Custom</h4>
                  <p>Designed for your users and goals—better engagement and conversions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <h2>Why Choose Buteos for Custom Software?</h2>
          <p className="section-intro">We specialize in creating tailored solutions for ambitious businesses with unique needs</p>
          
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Enterprise-Grade</h3>
              <p>Solutions built for scalability and security</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-plug"></i>
              </div>
              <h3>Custom Integrations</h3>
              <p>Connect with your existing tools and systems</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>Automation</h3>
              <p>Streamline workflows and business processes</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovative Solutions</h3>
              <p>Support for unique business models and ideas</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Collaborative Process</h3>
              <p>Transparent development from idea to launch</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Future-Proof</h3>
              <p>Built to evolve with your growing business</p>
            </div>
          </div>
          
          <div className="alert-container">
            <div className="alert info">
              <i className="fas fa-info-circle"></i>
              <p>Ready to discuss your custom project? We'd love to hear your ideas and help you bring them to life.</p>
            </div>
          </div>
          
          <div className="cta-container">
            <Link href="/contact" className="cta-button">Contact Us About Custom Solutions</Link>
            <Link href="/pricing" className="cta-button secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
