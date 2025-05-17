import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <h1>About Buteos Systems</h1>
          <p>We're a team of passionate developers dedicated to helping businesses thrive in the digital world.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Mission</h2>
              <p>At Buteos Systems, we believe that every business deserves access to high-quality web and mobile solutions. Our mission is to empower small businesses with the tools they need to succeed in today's digital landscape.</p>
              
              <h2>Our Approach</h2>
              <p>We take a holistic approach to development, focusing not just on creating beautiful websites and apps, but on delivering solutions that drive real business results. Our process is transparent, collaborative, and tailored to your specific needs.</p>

              <h2>Why Choose Us</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Full-stack expertise</li>
                <li><i className="fas fa-check-circle"></i> Transparent communication</li>
                <li><i className="fas fa-check-circle"></i> Proven track record</li>
                <li><i className="fas fa-check-circle"></i> Ongoing support</li>
                <li><i className="fas fa-check-circle"></i> Modern technologies</li>
              </ul>
            </div>

            
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Passion</h3>
              <p>We're passionate about creating exceptional digital experiences that help businesses grow.</p>
            </div>

            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Integrity</h3>
              <p>We believe in honest communication and transparent processes throughout our work.</p>
            </div>

            <div className="value-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>We stay at the forefront of technology to deliver cutting-edge solutions.</p>
            </div>

            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Collaboration</h3>
              <p>We work closely with our clients to ensure their vision becomes reality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how we can help your business thrive in the digital world.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button">Get in Touch</Link>
            <Link href="/pricing" className="cta-button secondary">View Our Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
} 