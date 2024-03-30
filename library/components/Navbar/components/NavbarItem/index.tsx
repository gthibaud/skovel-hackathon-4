'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import { MenuItem } from '@/data/menu';
import { Link } from '../../../Link';
import { DropdownContainer } from '../DropdownContainer';
import './styles.css';

interface NavbarItemProps {
    title: string | JSX.Element | JSX.Element[];
    to?: string;
    dropdownItems?: MenuItem[];
    style?: 'default' | 'button' | 'title' | 'light';
    onClick: () => void;
    className?: string;
}

export const NavbarItem: FC<NavbarItemProps> = (props) => {
    const { title, to, dropdownItems, style = 'default', onClick, className } = props;

    const buttonRef = useRef<HTMLDivElement | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isButtonFocused, setIsButtonFocused] = useState<boolean>(false);
    const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);

    useEffect(() => {
        if (!isButtonFocused && !isDropdownFocused) {
            setIsFocused(false);
        } else {
            setIsFocused(true);
        }
    }, [isButtonFocused, isDropdownFocused]);

    const isActive =
        (pathname === '/' && to === '/') || (to && to !== '/' && pathname.startsWith(to));

    return (
        <>
            <div
                className={`navbar-item-top ${className}`}
                ref={buttonRef}
                onClick={() => {
                    to && router.push(to);
                    onClick();
                }}
                onTouchEnd={() => {
                    to && router.push(to);
                    onClick();
                }}
                onMouseOver={() => setIsButtonFocused(true)}
                onMouseOut={() => setIsButtonFocused(false)}
            >
                {style === 'button' ? (
                    title
                ) : (
                    <Link
                        className={`navbar-item navbar-item-${isActive ? 'active' : ''} navbar-item-${isFocused ? 'focused' : ''} navbar-item-${style}`}
                        to={to}
                        style={{ color: 'var(--colors-text-subtle)' }}
                        outline="text"
                    >
                        {title}
                    </Link>
                )}
            </div>
            {dropdownItems && (
                <DropdownContainer
                    isFocused={isFocused}
                    setIsFocused={setIsDropdownFocused}
                    dropdownItems={dropdownItems}
                    parentRef={buttonRef}
                    onClick={onClick}
                />
            )}
        </>
    );
};
