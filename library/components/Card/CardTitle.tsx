import { FC } from 'react';
import './styles.css';

export interface CardTitleProps {
    title?: string | JSX.Element | JSX.Element[];
}

export const CardTitle: FC<CardTitleProps> = (props) => {
    const { title } = props;

    if (!title) {
        return null;
    }

    if (typeof title === 'string') {
        return (
            <div className="card-title">
                <h3 className="card-title">{title}</h3>
            </div>
        );
    }

    return <div className="card-title">{title}</div>;
};
