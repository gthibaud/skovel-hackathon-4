import { Event } from '../../library/types/Event';

export const events: Event[] = [
    {
        id: 'slkdjhgsldjkfhg',
        title: "L'affiche 😍",
        description:
            "C'est avec un grand plaisir que nous vous dévoilons l'affiche de cette 3ème édition de la Capybarun ! On espère qu'elle vous plaira autant qu'à nous 🥳. 🎨\n\nUn grand merci à notre artiste @lucie.illustration pour ce magnifique travail !",
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
        visibility: 'published',
        author: {
            id: 'premium',
            displayName: 'Michel Capy',
        },
        athletes: [],
        categories: [],
        isPartnership: false,
        likes: 12,
        position: undefined,
        distance: undefined,
        content: {
            id: 'dfvlkjh',
            type: 'image',
            src: '/medias/affiche.jpg',
            fileType: 'image',
            alt: 'Affiche de la Capybarun 2024',
        },
    },
    {
        id: 'slkdjhgsldjkfhg',
        title: 'J-7 avant le début des inscriptions ⏰ ',
        description:
            'J-7 avant le début des inscriptions ! Rendez-vous sur notre site internet à partir du lundi 12 février à 13h.\nSoyez prêts!',
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
        visibility: 'published',
        author: {
            id: 'premium',
            displayName: 'Michel Capy',
        },
        athletes: [],
        categories: [],
        isPartnership: false,
        likes: 12,
        position: undefined,
        distance: undefined,
        content: {
            id: 'dfvlkjh',
            type: 'default',
        },
    },
    {
        id: 'slkdjhgsldhg',
        title: 'Le développement durable à la Capybarun',
        description:
            'D’année en année, nous essayons de nous améliorer en matière de développement durable ! \nSi vous avez des questions sur ce sujet, n’hésitez pas à nous contacter',
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
        visibility: 'published',
        author: {
            id: 'premium',
            displayName: 'Michel Capy',
        },
        athletes: [],
        categories: [],
        isPartnership: false,
        likes: 12,
        position: undefined,
        distance: undefined,
        content: {
            id: 'dfvlkjh',
            type: 'default',
        },
    },
];
