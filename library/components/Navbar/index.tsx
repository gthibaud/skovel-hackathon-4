'use client';

import { editions } from '@/data/editions';
import { MenuItem, menu } from '@/data/menu';
import { Backdrop } from '@mui/material';
import { Cross } from 'gthibaud-icons-react';
import { FC, useEffect, useRef, useState } from 'react';
import { ChevronDown } from '../../icons/chevron-down';
import { Menu } from '../../icons/menu';
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
                    onMouseEnter={() => {
                        console.log('enter');
                        setIsFocused(true);
                    }}
                    onMouseLeave={() => setIsFocused(isMobileMenuOpen)}
                    ref={menuContainerRef}
                >
                    <div className="menu-container-horizontal">
                        <NavbarItem
                            onClick={handleClick}
                            title={
                                <span>
                                    <img
                                        src="/medias/capybarace-logo.png"
                                        alt="Logo"
                                    />
                                    CapybaRun
                                </span>
                            }
                            to="/"
                            style="title"
                        />
                        <NavbarItem
                            onClick={handleClick}
                            title={
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    2024 <ChevronDown style={{ fontSize: '1em' }} />
                                </span>
                            }
                            to="/2024"
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
                                onClick={() => {
                                    const open = isMobileMenuOpen;
                                    setIsMobileMenuOpen(!open);
                                    setIsFocused(!open);
                                }}
                            >
                                {isMobileMenuOpen ? <Cross /> : <Menu />}
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
                            height: isMobileMenuOpen ? '100%' : '0',
                            overflow: 'hidden',
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
                sx={{
                    color: '#aaa',
                    zIndex: 1,
                    backgroundColor: 'rgba(50, 50, 50, 0.3)',
                    transition: 'all 3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(2px)',
                }}
                open={isFocused}
                transitionDuration={500}
                onClick={() => {
                    setIsFocused(false);
                    setIsMobileMenuOpen(false);
                }}
            />
        </>
    );
};
