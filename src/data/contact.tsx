import { EmailFill, Facebook, Instagram, Twitter } from 'gthibaud-icons-react';
import { ReactElement } from 'react';

export type Contact = {
    id: string;
    type: 'email' | 'phone' | 'instagram' | 'facebook' | 'twitter';
    link: string;
    icon: ReactElement;
};

export const contact: Contact[] = [
    {
        id: 'email',
        type: 'email',
        link: 'mailto:hello@skovel.com',
        icon: <EmailFill />,
    },
    {
        id: 'instagram',
        type: 'instagram',
        link: 'https://www.instagram.com/g.thibo/',
        icon: <Instagram />,
    },
    {
        id: 'facebook',
        type: 'facebook',
        link: 'https://www.facebook.com/',
        icon: <Facebook />,
    },
    {
        id: 'twitter',
        type: 'twitter',
        link: 'https://twitter.com',
        icon: <Twitter />,
    },
];
