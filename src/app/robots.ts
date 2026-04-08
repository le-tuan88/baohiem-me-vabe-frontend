import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/?s=',        // Block WordPress search URL (gây lỗi GSC)
                    '/wp-admin/',  // Block WordPress admin paths
                    '/wp-login',   // Block WordPress login
                    '/wp-json/',   // Block WordPress REST API
                    '/feed/',      // Block RSS feed nếu có
                ],
            },
        ],
        sitemap: 'https://baohiemmevabe.com.vn/sitemap.xml',
        host: 'https://baohiemmevabe.com.vn',
    };
}
