import { MenuItem } from '@/data/menu';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface RaceQuickinkProps {
    item: MenuItem;
}

export const RaceQuicklink: FC<RaceQuickinkProps> = (props) => {
    const { title, to, icon, iconFill, logoSrc, summary } = props.item;

    return (
        <Link
            className="quicklink-container"
            href={to}
        >
            <Image
                src={logoSrc || ''}
                alt={`Logo épreuve ${title}`}
                width={140}
                height={140}
            />
            <p className="quicklink-title">{title}</p>
            <p className="quicklink-summary">{summary}</p>
        </Link>
    );
};
