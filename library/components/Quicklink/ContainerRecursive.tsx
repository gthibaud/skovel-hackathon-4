import { MenuItem } from '@/data/menu';
import { FC } from 'react';
import { Quicklink } from '.';
import { Link } from '../Link';
import './styles.css';

interface QuicklinksContainerProps {
    item: MenuItem;
}

export const QuicklinksContainerRecursive: FC<QuicklinksContainerProps> = (props) => {
    const { item } = props;

    return (
        <div className="quicklinks-container-section">
            <Link
                to={item.to}
                className="category"
                outline="text"
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
