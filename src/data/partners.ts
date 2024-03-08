type PartnersCategory = {
    id: string;
    name: string;
    summary: string;
};

type Partner = {
    id: string;
    name: string;
    summary: string;
    logo: string;
    url: string;
    categoryId?: string;
};

export const partnersCategories: PartnersCategory[] = [
    {
        id: 'premium',
        name: 'Partenaires premiums',
        summary: 'Ils rendent la CapybaRun possible chaque année.',
    },
    {
        id: 'official',
        name: 'Partenaires officiels',
        summary: 'Leurs contributions rendent chaque course inoubliable.',
    },
    {
        id: 'institutional',
        name: 'Partenaires institutionnels',
        summary: 'La CapybaRun est soutenue par des institutions locales et nationales.',
    },
    {
        id: 'technical',
        name: 'Partenaires techniques',
        summary: 'Ils vous accompagnent sur le terrain le jour de la course.',
    },
];

export const partners: Partner[] = [
    {
        id: 'allianz',
        name: 'Allianz',
        summary: 'Le partenaire de votre assurance',
        logo: '/partners/allianz.png',
        url: 'https://www.allianz.com',
        categoryId: 'premium',
    },
    {
        id: 'maurten',
        name: 'Maurten',
        summary: 'La nutrition sportive des champions',
        logo: '/partners/maurten.png',
        url: 'https://www.maurten.com',
        categoryId: 'technical',
    },
    {
        id: 'decathlon',
        name: 'Decathlon',
        summary: 'À fond la forme !',
        logo: '/partners/decathlon.png',
        url: 'https://www.decathlon.com',
        categoryId: 'official',
    },
    {
        id: 'eurosport',
        name: 'Eurosport',
        summary: 'Tous les sports en direct et en replay',
        logo: '/partners/eurosport.png',
        url: 'https://www.eurosport.com',
        categoryId: 'official',
    },
    {
        id: 'garmin',
        name: 'Garmin',
        summary: "L'équipement du sportif connecté",
        logo: '/partners/garmin.png',
        url: 'https://www.garmin.com',
        categoryId: 'official',
    },
    {
        id: 'strava',
        name: 'Strava',
        summary: 'Le réseau social du sportif',
        logo: '/partners/strava.png',
        url: 'https://www.strava.com',
        categoryId: 'technical',
    },
    {
        id: 'komoot',
        name: 'Komoot',
        summary: 'Les meilleures cartes et itinéraires pour vos aventures en plein air',
        logo: '/partners/komoot.png',
        url: 'https://www.komoot.com',
        categoryId: 'technical',
    },
    {
        id: 'salomon',
        name: 'Salomon',
        summary: "L'équipement du trail",
        logo: '/partners/salomon.png',
        url: 'https://www.salomon.com',
        categoryId: 'technical',
    },
    {
        id: 'hoka',
        name: 'Hoka',
        summary: 'Les chaussures les plus efficaces pour la course en montagne',
        logo: '/partners/hoka.png',
        url: 'https://www.hoka.com',
        categoryId: 'premium',
    },
    {
        id: 'haut-rhin',
        name: 'Conseil départemental du Haut-Rhin',
        summary: 'Le partenaire institutionnel de la CapybaRun',
        logo: '/partners/haut-rhin.png',
        url: 'https://www.haut-rhin.fr',
        categoryId: 'institutional',
    },
    {
        id: 'grand-est',
        name: 'Conseil régional du Grand Est',

        summary: 'Le partenaire institutionnel de la CapybaRun',
        logo: '/partners/grand-est.png',
        url: 'https://www.grandest.fr',
        categoryId: 'institutional',
    },
    {
        id: 'france-tv',
        name: 'France Télévisions',
        summary: 'Le partenaire média de la CapybaRun',
        logo: '/partners/france-tv.png',
        url: 'https://www.francetvinfo.fr',
        categoryId: 'official',
    },
    {
        id: 'vosges',
        name: 'Les Vosges',
        summary: 'Le partenaire institutionnel de la CapybaRun',
        logo: '/partners/vosges.png',
        url: 'https://www.vosges.fr',
        categoryId: 'institutional',
    },
];
