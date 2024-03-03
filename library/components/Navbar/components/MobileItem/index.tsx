'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import { MenuItem } from '@/data/menu';
import { ChevronRightBold } from 'gthibaud-icons-react';
import { ChevronDown } from '../../../../icons/chevron-down';
import './styles.css';

interface NavbarItemProps {
    title: string | JSX.Element | JSX.Element[];
    to: string;
    dropdownItems?: MenuItem[];
    style?: 'default' | 'button' | 'title' | 'light';
    onClick: () => void;
}

export const MobileItem: FC<NavbarItemProps> = (props) => {
    const { title, to, dropdownItems, style = 'default', onClick } = props;

    const buttonRef = useRef<HTMLDivElement | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isButtonFocused, setIsButtonFocused] = useState<boolean>(false);
    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

    useEffect(() => {
        if (!isButtonFocused && !isDropdownOpened) {
            setIsFocused(false);
        } else {
            setIsFocused(true);
        }
    }, [isButtonFocused, isDropdownOpened]);

    const isActive = (pathname === '/' && to === '/') || (to !== '/' && pathname.startsWith(to));

    const renderStyle = () => {
        if (style === 'button') {
            return title;
        }

        if (dropdownItems) {
            return (
                <a
                    className={`navbar-item navbar-item-${isActive ? 'active' : ''} navbar-item-${isFocused ? 'focused' : ''} navbar-item-${style}`} onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                >
                    {title} {isDropdownOpened ? <ChevronDown /> : <ChevronRightBold />}
                </a>
            )
        }

        return (
            <a
                className={`navbar-item navbar-item-${isActive ? 'active' : ''} navbar-item-${isFocused ? 'focused' : ''} navbar-item-${style}`}
                onClick={() => {
                    router.push(to)
                    onClick()
                }}
            >
                {title}
            </a>
        )
    }

    return (
        <>
            <div
                className={`navbar-item-top`}
                ref={buttonRef}
                onMouseOver={() => setIsButtonFocused(true)}
                onMouseOut={() => setIsButtonFocused(false)}
            >
                {renderStyle()}
            </div>
            {dropdownItems && (
                <div className={`navbar-item-childrens navbar-item-childrens-${isDropdownOpened ? 'open' : ""}`}>
                    {dropdownItems.map((item, index) => (
                        <MobileItem
                            key={index}
                            title={item.title}
                            to={item.to}
                            style='light'
                            onClick={onClick}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
