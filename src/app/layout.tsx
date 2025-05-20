import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from './layout.client';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://buteossystems.com'),
  title: {
    default: 'Buteos Systems - Web & Mobile Solutions',
    template: '%s | Buteos Systems'
  },
  description: 'Full-stack software engineering delivering seamless web and mobile design, development, and deployment for businesses ready to thrive online.',
  keywords: ['ai phone agent', 'ai agents', 'custom ai agents', 'web design', 'mobile app development', 'software engineering', 'business solutions', 'custom software'],
  openGraph: {
    title: 'Buteos Systems - Web & Mobile Solutions',
    description: 'Full-stack software engineering delivering seamless web and mobile design, development, and deployment for businesses ready to thrive online.',
    url: '/',
    siteName: 'Buteos Systems',
    images: [
      {
        url: 'https://storage.googleapis.com/buteos-res/bs_logo_nobg.png',
        width: 800,
        height: 600,
        alt: 'Buteos Systems Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buteos Systems - Web & Mobile Solutions',
    description: 'Full-stack software engineering delivering seamless web and mobile design, development, and deployment for businesses ready to thrive online.',
    images: ['https://storage.googleapis.com/buteos-res/bs_logo_nobg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="author" content="Buteos Systems" />
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
              <li><a href="/blog">Blog</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </footer>
        
        {/* Structured data for organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Buteos Systems',
              url: process.env.NEXT_PUBLIC_BASE_URL || 'https://buteossystems.com',
              logo: 'https://storage.googleapis.com/buteos-res/bs_logo_nobg.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '',
                contactType: 'customer service',
                email: 'contact@buteossystems.com',
                areaServed: 'US'
              },
              sameAs: [
                'https://twitter.com/buteossystems',
                'https://www.linkedin.com/company/buteos-systems',
                'https://www.facebook.com/buteossystems'
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
