const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchGraphQL(query: string, variables?: Record<string, any>) {
  if (!WORDPRESS_API_URL) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL is not defined in .env.local');
  }

  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // Cache settings could be added here for Next.js App Router (e.g. { next: { revalidate: 60 } })
    });

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      throw new Error('Failed to fetch from WordPress API');
    }

    return json.data;
  } catch (error) {
    console.error('Error fetching GraphQL API:', error);
    // Returning dummy data or empty to prevent full page crash could be a fallback strategy
    throw error;
  }
}

/**
 * Fetch the latest 10 posts from WordPress headless CMS
 */
export async function getLatestPosts() {
  const query = `
    query GetLatestPosts {
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  return fetchGraphQL(query);
}

/**
 * Fetch a single post by its slug
 */
export async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const variables = {
    id: slug,
    idType: "SLUG",
  };

  return fetchGraphQL(query, variables);
}
