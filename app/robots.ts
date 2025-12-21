import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/vibes/*', '/collections/*', '/guides/*', '/mag/*'],
            disallow: ['/', '/out/*', '/api/*', '/add-vibe'], // Home is noindex per requirement, out is noindex
        },
        sitemap: 'https://vibeholders.com/sitemap.xml',
    };
}
