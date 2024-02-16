import Link from 'next/link';
import { FC } from 'react';
import './styles.css';

interface ButtonProps {
    children: string | JSX.Element | JSX.Element[];
    variant?: '' | 'inverted';
    to?: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, variant = '', to, onClick, size = 'medium' } = props;

    if (to) {
        return (
            <Link
                href={to || '/'}
                className={`button button-${variant} button-size-${size}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <div
            className={`button button-${variant} button-size-${size}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
