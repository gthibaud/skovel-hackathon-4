import { menu } from '@/data/menu';
import { FC } from 'react';
import { RaceQuicklink } from './RaceQuicklink';
import './styles.css';

export const RaceQuicklinks: FC = () => {
    const menuItems = menu.filter((item) => item.to === '/races')[0]?.items;

    return (
        <div className="races-quicklinks-container">
            {menuItems?.map((item) => (
                <RaceQuicklink
                    item={item}
                    key={item.to}
                />
            ))}
        </div>
    );
};
