import Link from 'next/link';
import { FC } from 'react';
import './styles.css';

interface ButtonProps {
    children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
    variant?: '' | 'inverted';
    to?: string;
    onClick?: (e: any) => void;
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    style?: any;
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
    } = props;

    if (to) {
        return (
            <Link
                href={to || '/'}
                className={`button button-${variant} button-size-${size}`}
                style={style}
            >
                {isLoading ? '...' : children}
            </Link>
        );
    }

    return (
        <button
            className={`button button-${variant} button-size-${size}`}
            onClick={onClick}
            style={style}
        >
            {isLoading ? '...' : children}
        </button>
    );
};
