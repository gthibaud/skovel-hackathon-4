import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'CapybaRun 2024',
        short_name: 'CapybaRun',
        description: 'CapbyaRun 2024 - 200Km de trail sans assistance au cœur des Vosges',
        start_url: '/',
        display: 'standalone',
        background_color: '#0e3a2f',
        theme_color: '#419468',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
