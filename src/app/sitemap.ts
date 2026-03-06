import { MetadataRoute } from 'next';
import { fetchGraphQL } from '@/lib/api';

const SITE_URL = 'https://baohiemmevabe.com.vn';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/bao-hiem-thai-san`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/nhi-khoa`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/combo-gia-dinh`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/quy-trinh`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/lien-he`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ];

    let dynamicRoutes: MetadataRoute.Sitemap = [];

    try {
        const query = `
      query GetAllPostSlugs {
        posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            slug
            modified
          }
        }
      }
    `;

        const data = await fetchGraphQL(query);
        const posts = data?.posts?.nodes || [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dynamicRoutes = posts.map((post: any) => ({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.modified || new Date()),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));
    } catch (error) {
        console.error('Failed to fetch posts for sitemap:', error);
    }

    return [...staticRoutes, ...dynamicRoutes];
}
