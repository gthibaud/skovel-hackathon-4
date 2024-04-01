'use client';

import { editions } from '@/data/editions';
import { MenuItem, menu } from '@/data/menu';
import { ChevronBottom, List } from 'gthibaud-icons-react';
import { Cross } from 'gthibaud-icons-react/lib/components/Cross';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import { MobileItem } from './components/MobileItem';
import { NavbarItem } from './components/NavbarItem/index';
import './styles.css';

interface NavbarProps {
    menuItems: MenuItem[];
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { menuItems } = props; // TODO use menuItems

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const [menuContainerDimensions, setMenuContainerDimensions] = useState<{
        height: number;
        width: number;
        top: number;
        left: number;
    }>({
        // Set the initial dimensions to 1 to avoid strange behavior in Safari, cf. https://stackoverflow.com/questions/69904893/webkit-backdrop-filter-not-working-on-safari
        height: 1,
        width: 1,
        top: -1,
        left: -1,
    });

    const updateMenuContainerDimensions = () => {
        if (menuContainerRef.current) {
            const rect = menuContainerRef.current.getBoundingClientRect();
            setMenuContainerDimensions({
                height: rect.height,
                width: rect.width,
                top: rect.top,
                left: rect.left,
            });
        }
    };

    useEffect(() => {
        updateMenuContainerDimensions();

        if (menuContainerRef.current) {
            // Attach a listener to the window to update the dimensions of the menu container
            window.addEventListener('resize', updateMenuContainerDimensions);
        }
        return () => {
            // Remove the listener when the component is unmounted
            window.removeEventListener('resize', updateMenuContainerDimensions);
        };
    }, [menuContainerRef]);

    const handleClick = () => {
        setIsMobileMenuOpen(false);
        setIsFocused(false);
    };

    return (
        <>
            <menu className="menu-container">
                <div
                    className={`menu-card ${isFocused ? 'focused' : ''}`}
                    onMouseEnter={() => setIsFocused(true)}
                    onTouchStart={() => setIsFocused(true)}
                    onMouseLeave={() => setIsFocused(isMobileMenuOpen)}
                    ref={menuContainerRef}
                >
                    <div className="menu-container-horizontal">
                        <NavbarItem
                            onClick={handleClick}
                            title={
                                <span>
                                    <Image
                                        src="/medias/capybarace-logo.png"
                                        alt="CapybaRun 2024"
                                        width={40}
                                        height={40}
                                        priority
                                    />
                                    CapybaRun
                                </span>
                            }
                            to="/"
                            style="title"
                            tabIndex={0} // Make this element the first focusable element of the page
                        />
                        <NavbarItem
                            onClick={handleClick}
                            title={
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    2024{' '}
                                    <ChevronBottom style={{ fontSize: '10px', marginLeft: 4 }} />
                                </span>
                            }
                            dropdownItems={editions
                                .filter((e) => !e.current)
                                .map((e) => ({ title: `Édition ${e.name}`, to: `/${e.to}` }))}
                            style="light"
                        />
                        <div className="pad-container" />
                        <div className="menu-items">
                            {menu
                                .filter((m) => m.position === 'center')
                                .map((item, index) => (
                                    <NavbarItem
                                        key={index}
                                        title={item.title}
                                        to={item.to}
                                        dropdownItems={item.items}
                                        onClick={handleClick}
                                    />
                                ))}
                            <div className="margin-container" />
                            {menu
                                .filter((m) => m.position === 'right')
                                .map((item, index) => (
                                    <NavbarItem
                                        key={index}
                                        title={
                                            <Button
                                                to="/register"
                                                variant="inverted"
                                            >
                                                S'inscrire
                                            </Button>
                                        }
                                        to={item.to}
                                        onClick={handleClick}
                                        style="button"
                                    />
                                ))}
                        </div>
                        <div className="menu-open-button">
                            <Button
                                touchDetection
                                title="menu"
                                onClick={() => {
                                    const open = isMobileMenuOpen;
                                    setIsMobileMenuOpen(!open);
                                    setIsFocused(!open);
                                }}
                                style={{
                                    height: 42,
                                }}
                            >
                                {isMobileMenuOpen ? (
                                    <Cross />
                                ) : (
                                    <List style={{ fontSize: 20, margin: 2 }} />
                                )}
                            </Button>
                        </div>
                        <div
                            className="menu-container-backdrop"
                            style={{
                                position: 'absolute',
                                height: menuContainerDimensions.height,
                                width: menuContainerDimensions.width,
                                top: menuContainerDimensions.top,
                                left: menuContainerDimensions.left,
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                            }}
                        />
                    </div>
                    <div
                        className="vertical-menu"
                        style={{
                            height: isMobileMenuOpen ? 'calc(100vh - 100px)' : '0',
                            overflowY: isMobileMenuOpen ? 'auto' : 'hidden',
                            transition: 'height 0.3s ease-in-out',
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <MobileItem
                                key={index}
                                title={item.title}
                                to={item.to}
                                dropdownItems={item.items}
                                onClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
            </menu>
            <Backdrop
                open={isFocused}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setIsFocused(false);
                }}
            />
        </>
    );
};
