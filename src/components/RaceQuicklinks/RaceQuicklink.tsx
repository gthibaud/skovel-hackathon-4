import { MenuItem } from '@/data/menu';
import Link from 'next/link';
import { FC } from 'react';
import { Tooltip } from '../../../library/components/Tooltip';

interface RaceQuickinkProps {
    item: MenuItem;
}

export const RaceQuicklink: FC<RaceQuickinkProps> = (props) => {
    const { title, to, icon, iconFill, items, summary } = props.item;

    return (
        <Tooltip title={summary}>
            <Link
                className="quicklink-container"
                href={to}
            >
                <p className="quicklink-title">{title}</p>
                {/* <p className="quicklink-summary">{summary}</p> */}
            </Link>
        </Tooltip>
    );
};
