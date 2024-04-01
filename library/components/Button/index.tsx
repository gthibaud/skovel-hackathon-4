'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { Button as ButtonAria, Link } from 'react-aria-components';
import './styles.css';

export interface ButtonProps {
    children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
    variant?: '' | 'inverted' | 'text';
    to?: string;
    onClick?: (e: any) => void;
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    disabled?: boolean;
    style?: any;
    touchDetection?: boolean; // Detects if the user is using a touch device
    title?: string; // Title attribute for the button
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    iconSize?: number;
    iconStyle?: any;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        variant = '',
        to,
        onClick,
        disabled = false,
        size = 'medium',
        isLoading = false,
        style,
        touchDetection = false,
        title = 'button',
        startIcon: StartIcon,
        endIcon: EndIcon,
        iconSize = 16,
        iconStyle,
    } = props;

    const router = useRouter();

    const renderIcon = (children: any) => {
        return (
            <>
                {StartIcon ? (
                    <StartIcon.type
                        // color={textColor}
                        {...StartIcon.props}
                        size={iconSize}
                        style={{
                            display: 'flex',
                            margin: '0',
                            height: '100%',
                            ...iconStyle,
                        }}
                    />
                ) : null}
                {children}
                {EndIcon ? (
                    <EndIcon.type
                        // color={textColor}
                        {...EndIcon.props}
                        size={iconSize}
                        style={{
                            display: 'flex',
                            margin: '0',
                            height: '100%',
                            ...iconStyle,
                        }}
                    />
                ) : null}
            </>
        );
    };

    if (to) {
        return (
            <Link
                onPress={() => router.push(to || '/')}
                className={`button button-${variant} button-size-${size}`}
                style={style}
            >
                {isLoading ? '...' : renderIcon(children)}
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
            {isLoading ? '...' : renderIcon(children)}
        </ButtonAria>
    );
};
