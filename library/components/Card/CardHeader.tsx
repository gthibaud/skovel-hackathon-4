import { FC } from 'react';
import { CardAction, CardActionProps } from './CardAction';
import { CardTitle, CardTitleProps } from './CardTitle';
import './styles.css';

export interface CardHeaderProps extends CardTitleProps, CardActionProps {}

export const CardHeader: FC<CardHeaderProps> = (props) => {
    return (
        <div className="card-header">
            <CardTitle {...props} />
            <CardAction {...props} />
        </div>
    );
};
