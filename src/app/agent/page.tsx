import Link from 'next/link';
import Image from 'next/image';

export default function AgentPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Core AI Phone Agent</h1>
            <p>
              Let an AI-powered phone agent handle your business calls! Our core AI phone agent can answer questions, take orders, schedule appointments, and provide information 24/7—no human needed. It's like having a virtual receptionist that never sleeps.
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
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Management</h3>
              <p>Automated answering and intelligent routing</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Scheduling</h3>
              <p>Core appointment booking and management</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shopping-basket"></i>
              </div>
              <h3>Order Taking</h3>
              <p>Simple product ordering capabilities</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <h3>Company Info</h3>
              <p>Answers to FAQs and business details</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-plug"></i>
              </div>
              <h3>Basic Integration</h3>
              <p>Connect to one third-party service</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Setup Support</h3>
              <p>Complete onboarding and configuration</p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <h2>Upgrade Your AI Agent</h2>
          <p className="section-intro">Enhance your virtual assistant with these powerful capabilities</p>
          
          <div className="upgrade-options">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-building"></i>
                  <h3>Multi-Location</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Handle calls for multiple business locations with location-specific responses.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-network-wired"></i>
                  <h3>Expanded Integrations</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Connect to CRMs, advanced scheduling, inventory systems, and more.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-brain"></i>
                  <h3>NLP Enhancement</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Smarter AI for better understanding and intent recognition.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-smile"></i>
                  <h3>Sentiment Analysis</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Detect caller mood and respond accordingly for better experiences.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <i className="fas fa-comments"></i>
                  <h3>Omni-Channel</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Extend your AI agent to SMS, web chat, and other channels.</p>
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
            <Link href="/payment?package=basic-ai-agent" className="cta-button">Get Started</Link>
            <Link href="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
