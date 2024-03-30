'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Link as LinkAria } from 'react-aria-components';
import './styles.css';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | undefined;
    children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
    className?: string;
    style?: React.CSSProperties;
}

export const Link: FC<LinkProps> = (props) => {
    const { to, children, className = '', style } = props;

    const router = useRouter();

    return (
        <LinkAria
            onPress={() => router.push(to || '/')}
            className={`link ${className} ${typeof children === 'string' ? 'link-text' : ''}`}
            style={style}
        >
            {children}
        </LinkAria>
    );
};
