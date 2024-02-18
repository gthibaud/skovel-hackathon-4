import { Calendar, DocumentText, DocumentTextFill, Events, EventsFill, FlagCheckered, Handsparkles, HandsparklesFill, HomeRounded, HomeRoundedFill, InfoCircle, InfoCircleFill, People, PeopleFill, QuestionMarkCircle, QuestionMarkCircleFill, Ticket, TicketFill } from "gthibaud-icons-react";
import { ReactElement } from "react";

export type MenuItem = {
    title: string;
    to: string;
    icon?: ReactElement;
    iconFill?: ReactElement;
    items?: MenuItem[];
}

export const menu: MenuItem[] = [
    {
        title: "CapybaRun",
        to: "/",
        icon: <HomeRounded />,
        iconFill: <HomeRoundedFill />
    },
    {
        title: "Actualités",
        to: "/events",
        icon: <Events />,
        iconFill: <EventsFill />
    },
    {
        title: "Informations",
        to: "/about",
        items: [
            {
                title: "La course",
                to: "/about/the-race",
                icon: <FlagCheckered />,
                iconFill: <FlagCheckered />
            },
            {
                title: "Programme",
                to: "/about/program",
                icon: <Calendar />,
                iconFill: <Calendar />
            },
            {
                title: "Accès",
                to: "/about/access",
                icon: <InfoCircle />,
                iconFill: <InfoCircleFill />
            },
            {
                title: "Règlement",
                to: "/about/rules",
                icon: <DocumentText />,
                iconFill: <DocumentTextFill />
            },
            {
                title: "Bénévoles",
                to: "/about/volunteer",
                icon: <People />,
                iconFill: <PeopleFill />
            },
            {
                title: "Partenaires",
                to: "/about/partners",
                icon: <Handsparkles />,
                iconFill: <HandsparklesFill />
            },
            {
                title: "FAQ",
                to: "/about/questions",
                icon: <QuestionMarkCircle />,
                iconFill: <QuestionMarkCircleFill />,
            }
        ]
    },
    {
        title: "Épreuves",
        to: "/races",
        items: [
            {
                title: "200 Km",
                to: "/races/200km"
            },
            {
                title: "90 Km",
                to: "/races/90km"
            },
            {
                title: "Challenge entreprises",
                to: "/races/challenge-entreprises"
            },
        ]
    },
    {
        title: "S'incrire",
        to: "/register",
        icon: <Ticket />,
        iconFill: <TicketFill />
    }
];