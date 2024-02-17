import { CSSProperties, FC } from 'react';
import { Markdown } from '../Markdown';
import { CardHeader, CardHeaderProps } from './CardHeader';
import './styles.css';

interface CardProps extends CardHeaderProps {
    children: string | JSX.Element | JSX.Element[];
    variant?: '' | 'grid' | 'centered';
    style?: CSSProperties;
}

export const Card: FC<CardProps> = (props) => {
    const { children, variant = '', style } = props;

    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Markdown>{children}</Markdown>;
        }
        return children;
    };

    return (
        <div
            className={`card-container card-container-${variant}`}
            style={style}
        >
            <CardHeader {...props} />
            <div className={`card-content-${variant}`}>{renderChildren()}</div>
        </div>
    );
};
