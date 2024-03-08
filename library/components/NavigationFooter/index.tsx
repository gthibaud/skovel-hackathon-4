'use client';

import { MenuItem, menu } from '@/data/menu';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import './styles.css';

const findCurrentMenuItemRecursively = (
    menu: MenuItem[],
    pathname: string,
): MenuItem | undefined => {
    for (const item of menu) {
        if (item.to === pathname) {
            return item;
        }
        if (item.items) {
            const result = findCurrentMenuItemRecursively(item.items, pathname);
            if (result) {
                return result;
            }
        }
    }
};

const findNextMenuItemRecursively = (
    menu: MenuItem[],
    currentItem?: MenuItem,
): MenuItem | undefined => {
    for (const item of menu) {
        if (item === currentItem) {
            return menu[menu.indexOf(item) + 1];
        }
        if (item.items) {
            const result = findNextMenuItemRecursively(item.items, currentItem);
            if (result) {
                return result;
            }
        }
    }
};

const findPreviousMenuItemRecursively = (
    menu: MenuItem[],
    currentItem?: MenuItem,
): MenuItem | undefined => {
    for (const item of menu) {
        if (item === currentItem) {
            return menu[menu.indexOf(item) - 1];
        }
        if (item.items) {
            const result = findPreviousMenuItemRecursively(item.items, currentItem);
            if (result) {
                return result;
            }
        }
    }
};

export const NavigationFooter: FC = () => {
    // TODO support previous and next items higher in the pages hierarchy (not only in the current level)
    const pathname = usePathname();
    const [previousMenuItem, setPreviousMenuItem] = useState<MenuItem | undefined>();
    const [nextMenuItem, setNextMenuItem] = useState<MenuItem | undefined>();

    useEffect(() => {
        const currentMenuItem = findCurrentMenuItemRecursively(menu, pathname);
        setNextMenuItem(findNextMenuItemRecursively(menu, currentMenuItem));
        setPreviousMenuItem(findPreviousMenuItemRecursively(menu, currentMenuItem));
    }, [pathname]);

    return (
        <div className="navigation-footer">
            {previousMenuItem ? (
                <a
                    href={previousMenuItem.to}
                    className="item"
                >
                    <p className="link">Page précédente</p>
                    <p className="title">
                        {previousMenuItem.title} {previousMenuItem.icon}
                    </p>
                </a>
            ) : (
                <div className="ghost-item" />
            )}
            {nextMenuItem ? (
                <a
                    href={nextMenuItem.to}
                    className="item"
                >
                    <p className="link">Page suivante</p>
                    <p className="title">
                        {nextMenuItem.icon} {nextMenuItem.title}
                    </p>
                </a>
            ) : (
                <div className="ghost-item" />
            )}
        </div>
    );
};
