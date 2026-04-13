import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot'],
                allow: '/',
            },
            {
                userAgent: ['CCBot', 'Bytespider'],
                disallow: '/',
            }
        ],
        sitemap: 'https://legacysolutions-agency.com/sitemap.xml',
    };
}
