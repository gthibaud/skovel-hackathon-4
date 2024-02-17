'use client';

import { Backdrop } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from '../../icons/chevron-down';
import { Button } from '../Button';
import { NavbarItem } from './components/NavbarItem/index';
import './styles.css';

export const Navbar = () => {
    const router = useRouter();

    const [isFocused, setIsFocused] = useState<boolean>(false);

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

    useEffect(() => {
        if (menuContainerRef.current) {
            const rect = menuContainerRef.current.getBoundingClientRect();
            setMenuContainerDimensions({
                height: rect.height,
                width: rect.width,
                top: rect.top,
                left: rect.left,
            });
        }
    }, [menuContainerRef]);

    return (
        <>
            <menu className="menu-container">
                <div
                    className={`menu-card ${isFocused ? 'focused' : ''}`}
                    onMouseOver={() => setIsFocused(true)}
                    onMouseOut={() => setIsFocused(false)}
                    ref={menuContainerRef}
                    // data-tilt
                    // data-tilt-max="1.5"
                    // data-tilt-speed="400"
                    // data-tilt-perspective="500"
                >
                    <NavbarItem
                        title={
                            <span>
                                <img
                                    src="/capybarace-logo.png"
                                    alt="Logo"
                                />
                                CapybaRun
                            </span>
                        }
                        to="/"
                        style="title"
                    />
                    <NavbarItem
                        title={
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                2024 <ChevronDown style={{ fontSize: '1em' }} />
                            </span>
                        }
                        to="/2024"
                        dropdownItems={[
                            { title: 'Édition 2023', to: '/2022' },
                            { title: 'Édition 2022', to: '/2022' },
                            { title: 'Édition 2019', to: '/2022' },
                        ]}
                        style="light"
                    />
                    <div className="pad-container" />
                    <NavbarItem
                        title="Actualités"
                        to="/events"
                    />
                    <NavbarItem
                        title="Informations"
                        to="/about"
                        dropdownItems={[
                            { title: 'Règlement', to: '/about/rules' },
                            { title: 'Partenaires', to: '/about/partners' },
                            { title: 'Contact', to: '/about/contact' },
                        ]}
                    />
                    <NavbarItem
                        title="Épreuves"
                        to="/races"
                        dropdownItems={[
                            { title: '90 Km', to: '/races/90k' },
                            { title: '200 Km', to: '/races/200k' },
                        ]}
                    />
                    <div className="margin-container" />
                    <NavbarItem
                        title={
                            <Button
                                to="/register"
                                variant="inverted"
                            >
                                S'inscrire
                            </Button>
                        }
                        to="/register"
                        style="button"
                    />
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
                onClick={() => setIsFocused(false)}
            />
        </>
    );
};