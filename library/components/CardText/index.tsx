import { FC } from 'react';
import { Card, CardProps } from '../Card';
import './styles.css';

export const CardText: FC<CardProps> = (props) => {
    return (
        <Card
            {...props}
            className={`text-card ${props.className}`}
        />
    );
};
