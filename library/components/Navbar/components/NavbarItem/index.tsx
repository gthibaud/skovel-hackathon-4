'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import { DropdownContainer } from '../DropdownContainer';
import './styles.css';

interface NavbarItemProps {
    title: string | JSX.Element | JSX.Element[];
    to: string;
    dropdownItems?: any[];
    style?: 'default' | 'button' | 'title' | 'light';
}

export const NavbarItem: FC<NavbarItemProps> = (props) => {
    const { title, to, dropdownItems, style = 'default' } = props;

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

    const isActive = (pathname === '/' && to === '/') || (to !== '/' && pathname.startsWith(to));

    return (
        <>
            <div
                className={`navbar-item-top`}
                ref={buttonRef}
                onClick={() => router.push(to)}
                onMouseOver={() => setIsButtonFocused(true)}
                onMouseOut={() => setIsButtonFocused(false)}
            >
                {style === 'button' ? (
                    title
                ) : (
                    <a
                        className={`navbar-item navbar-item-${isActive ? 'active' : ''} navbar-item-${isFocused ? 'focused' : ''} navbar-item-${style}`}
                    >
                        {title}
                    </a>
                )}
            </div>
            {dropdownItems && (
                <DropdownContainer
                    isFocused={isFocused}
                    setIsFocused={setIsDropdownFocused}
                    dropdownItems={dropdownItems}
                    parentRef={buttonRef}
                />
            )}
        </>
    );
};