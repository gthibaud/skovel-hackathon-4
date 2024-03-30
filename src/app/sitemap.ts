import { MenuItem, menu } from '@/data/menu';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const generateMenuItemSitemap = (item: MenuItem): MetadataRoute.Sitemap => {
        const items = item.items || [];
        return [
            {
                url: `https://capybarun.skovel.com${item.to}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            ...items.flatMap(generateMenuItemSitemap),
        ];
    };

    return [
        {
            url: 'https://capybarun.skovel.com/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...menu.flatMap(generateMenuItemSitemap),
    ];
}
