'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Button as ButtonAria, Link } from 'react-aria-components';
import './styles.css';

interface ButtonProps {
    children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
    variant?: '' | 'inverted';
    to?: string;
    onClick?: (e: any) => void;
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    style?: any;
    touchDetection?: boolean; // Detects if the user is using a touch device
    title?: string; // Title attribute for the button
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        variant = '',
        to,
        onClick,
        size = 'medium',
        isLoading = false,
        style,
        touchDetection = false,
        title = 'button',
    } = props;

    const router = useRouter();

    if (to) {
        return (
            <Link
                onPress={() => router.push(to || '/')}
                className={`button button-${variant} button-size-${size}`}
                style={style}
            >
                {isLoading ? '...' : children}
            </Link>
        );
    }

    return (
        <ButtonAria
            className={`button button-${variant} button-size-${size}`}
            onPressStart={touchDetection ? undefined : onClick}
            onPressEnd={touchDetection ? onClick : undefined}
            style={style}
            aria-label={typeof children === 'string' ? children : title}
        >
            {isLoading ? '...' : children}
        </ButtonAria>
    );
};
