// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://buteossystems.com';
  
  // Get current date for lastModified
  const currentDate = new Date();
  
  // Define your routes
  const routes = [
    '',
    '/web',
    '/mobile',
    '/agent',
    '/custom',
    '/pricing',
    '/contact',
    '/about',
    '/blog',
    '/privacy',
    '/terms',
  ];
  
  // Create sitemap entries with proper type for changeFrequency
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
