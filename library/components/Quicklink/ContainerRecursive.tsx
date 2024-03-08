import { MenuItem } from '@/data/menu';
import Link from 'next/link';
import { FC } from 'react';
import { Quicklink } from '.';
import './styles.css';

interface QuicklinksContainerProps {
    item: MenuItem;
}

export const QuicklinksContainerRecursive: FC<QuicklinksContainerProps> = (props) => {
    const { item } = props;

    return (
        <div className="quicklinks-container-section">
            <Link
                href={item.to}
                className="category"
            >
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
            </Link>
            <div className="quicklinks-container">
                {item.items?.map((quicklink, index) => (
                    <Quicklink
                        key={index}
                        quicklink={quicklink}
                    />
                ))}
            </div>
        </div>
    );
};
