import {
    Calendar,
    DocumentText,
    DocumentTextFill,
    Email,
    EmailFill,
    Events,
    EventsFill,
    FlagCheckered,
    Handsparkles,
    HandsparklesFill,
    HomeRounded,
    HomeRoundedFill,
    InfoCircle,
    InfoCircleFill,
    People,
    PeopleFill,
    QuestionMarkCircle,
    QuestionMarkCircleFill,
    Ticket,
    TicketFill,
} from 'gthibaud-icons-react';
import { ReactElement } from 'react';

export type MenuItem = {
    title: string;
    to: string;
    icon?: ReactElement;
    iconFill?: ReactElement;
    items?: MenuItem[];
    summary?: string;
    pictureProfile?: string;
    position?: 'left' | 'center' | 'right';
};

export const menu: MenuItem[] = [
    {
        title: 'CapybaRun',
        to: '/',
        icon: <HomeRounded />,
        iconFill: <HomeRoundedFill />,
        pictureProfile: '/images/capybarace-logo.png',
        position: 'left',
    },
    {
        title: 'Actualités',
        to: '/events',
        icon: <Events />,
        iconFill: <EventsFill />,
        position: 'center',
    },
    {
        title: 'Informations',
        to: '/about',
        position: 'center',
        items: [
            {
                title: 'La course',
                to: '/about/the-race',
                icon: <FlagCheckered />,
                iconFill: <FlagCheckered />,
                summary: 'La Capyrun, son histoire et ses particularités.',
            },
            {
                title: 'Programme',
                to: '/about/program',
                icon: <Calendar />,
                iconFill: <Calendar />,
                summary: 'Découvrez le programme de la course.',
            },
            {
                title: 'Accès',
                to: '/about/access',
                icon: <InfoCircle />,
                iconFill: <InfoCircleFill />,
                summary: 'Accéder au site de la course, en voiture, vélo ou transports.',
            },
            {
                title: 'Règlement',
                to: '/about/rules',
                icon: <DocumentText />,
                iconFill: <DocumentTextFill />,
                summary: "Le règlement de la course, à lire avant de s'inscrire.",
            },
            {
                title: 'Bénévoles',
                to: '/about/volunteer',
                icon: <People />,
                iconFill: <PeopleFill />,
                summary: "Rejoignez l'équipe des bénévoles !",
            },
            {
                title: 'Partenaires',
                to: '/about/partners',
                icon: <Handsparkles />,
                iconFill: <HandsparklesFill />,
                summary: 'Nos partenaires, sans qui la course ne serait pas possible.',
            },
            {
                title: 'FAQ',
                to: '/about/questions',
                icon: <QuestionMarkCircle />,
                iconFill: <QuestionMarkCircleFill />,
                summary: 'Trouvez la réponse à votre question.',
            },
            {
                title: 'Contact',
                to: '/contact',
                icon: <Email />,
                iconFill: <EmailFill />,
                summary: 'Une question ? Contactez-nous !',
            },
        ],
    },
    {
        title: 'Épreuves',
        to: '/races',
        position: 'center',
        items: [
            {
                title: '200 Km',
                to: '/races/200km',
                summary: 'La course reine, 200 km. Oserez-vous relever le défi ?',
            },
            {
                title: '90 Km',
                to: '/races/90km',
                summary: 'Un parcours de 90 km, idéal pour les débutants.',
            },
            {
                title: 'Challenge entreprises',
                to: '/races/challenge-entreprises',
                summary: 'Un défi sportif et convivial pour les entreprises.',
            },
        ],
    },
    {
        title: "S'incrire",
        to: '/register',
        icon: <Ticket />,
        iconFill: <TicketFill />,
        position: 'right',
    },
];
