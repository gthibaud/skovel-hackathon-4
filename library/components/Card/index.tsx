import { FC } from 'react';
import { CardHeader, CardHeaderProps } from './CardHeader';
import './styles.css';

interface CardProps extends CardHeaderProps {
    children: string | JSX.Element | JSX.Element[];
    variant?: '' | 'grid';
}

export const Card: FC<CardProps> = (props) => {
    const { children, variant = '' } = props;

    return (
        <div className={`card-container card-container${variant}`}>
            <CardHeader {...props} />
            {children}
        </div>
    );
};
