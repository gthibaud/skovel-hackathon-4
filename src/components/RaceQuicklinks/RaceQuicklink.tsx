import { MenuItem } from '@/data/menu';
import Link from 'next/link';
import { FC } from 'react';

interface RaceQuickinkProps {
    item: MenuItem;
}

export const RaceQuicklink: FC<RaceQuickinkProps> = (props) => {
    const { title, to, icon, iconFill, items, summary } = props.item;

    return (
        <Link
            className="quicklink-container"
            href={to}
        >
            <p className="quicklink-title">{title}</p>
            <p className="quicklink-summary">{summary}</p>
        </Link>
    );
};
