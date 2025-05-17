import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from './layout.client';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Buteos Systems - Web & Mobile Solutions</title>
        <meta name="description" content="Full-stack software engineering delivering seamless web and mobile design, development, and deployment for businesses ready to thrive online." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="ai phone agent, ai agents, custom ai agents, web design, mobile app development, software engineering, business solutions, custom software, web development, mobile app development, software development, business software, custom software development, web design services, mobile app design, software design, business software development, custom software development, web design company, mobile app development company, software development company, business software development company, custom software development company" />
        <meta name="author" content="Buteos Systems" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <LayoutClient />
        <div className="logo-container">
          <a href="/">
            <img src="https://storage.googleapis.com/buteos-res/bs_logo_nobg.png" alt="Buteos Systems Logo" className="logo-image" />
          </a>
        </div>
        {children}
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Buteos Systems. All Rights Reserved.</p>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}