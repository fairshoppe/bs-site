import { NextRequest } from 'next/server';

// Google Cloud Storage bucket information
const bucketName = 'buteos-res';
const articlesFolder = 'blogs/articles';
const bucketBaseUrl = `https://storage.googleapis.com/${bucketName}`;

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

// GET handler to fetch all articles or a specific article
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  
  try {
    if (id) {
      // Fetch a specific article - first try from the public directory
      let articleUrl = `/blog/article-${id}.json`;
      let response = await fetch(new URL(articleUrl, 'http://localhost'));
      
      // If not found in public directory, try from Google Cloud Storage
      if (!response.ok) {
        articleUrl = `${bucketBaseUrl}/${articlesFolder}/article-${id}.json`;
        response = await fetch(articleUrl);
      }

      if (!response.ok) {
        return new Response(JSON.stringify({ message: 'Article not found' }), { 
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const article = await response.json();
      return new Response(JSON.stringify(article), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Fetch list of all articles
      const listUrl = `${bucketBaseUrl}/${articlesFolder}/articles-list.json`;
      const response = await fetch(listUrl);
      
      if (!response.ok) {
        // Return sample data if articles list doesn't exist yet
        const sampleArticles = [
          {
            id: 1,
            title: 'The Future of Web Development',
            excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
            author: 'John Doe',
            date: 'May 15, 2025',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
          },
          {
            id: 2,
            title: 'Mobile App Development Best Practices',
            excerpt: 'Key strategies and best practices for building successful mobile applications.',
            author: 'Jane Smith',
            date: 'May 10, 2025',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
          },
          {
            id: 3,
            title: 'AI Integration in Business Applications',
            excerpt: 'How artificial intelligence is transforming business applications and workflows.',
            author: 'Alex Johnson',
            date: 'May 5, 2025',
            image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c'
          }
        ];
        return new Response(JSON.stringify(sampleArticles), { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const articles = await response.json();
      return new Response(JSON.stringify(articles), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
    return new Response(JSON.stringify({ message: 'Error fetching articles' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}