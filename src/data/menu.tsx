import { People } from "gthibaud-icons-react";
import { ElementType } from "react";
import { PulsingDot } from "../../library/components/Animations/PulsingDot";

export type MenuItem = {
    title: string;
    to: string;
    icon?: ElementType;
    items?: MenuItem[];
}

export const menu: MenuItem[] = [
    {
        title: "CapybaRun",
        to: "/",
    },
    {
        title: "Actualités",
        to: "/events",
        icon: PulsingDot
    },
    {
        title: "Informations",
        to: "/about",
        items: [
            {
                title: "La course",
                to: "/about/the-race",
                icon: People
            },
            {
                title: "Programme",
                to: "/about/calendar",
            },
            {
                title: "Accès",
                to: "/about/access",
            },
            {
                title: "Règlement",
                to: "/about/rules",
            },
            {
                title: "Bénévoles",
                to: "/about/volonteer",
            },
            {
                title: "Partenaires",
                to: "/about/partners",
            },
            {
                title: "FAQ",
                to: "/about/questions",
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
    }
];