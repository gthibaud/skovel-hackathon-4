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
    outline?: 'box' | 'text' | 'none';
}

export const Link: FC<LinkProps> = (props) => {
    const { to, children, className = '', style, outline } = props;

    const router = useRouter();

    const isTextLink = typeof children === 'string';
    const outlineFormatted = outline || isTextLink ? 'text' : 'box';

    return (
        <LinkAria
            onPress={() => router.push(to || '/')}
            className={`link ${className} ${isTextLink ? 'link-text' : ''} outline-${outlineFormatted}`}
            style={style}
        >
            {children}
        </LinkAria>
    );
};
