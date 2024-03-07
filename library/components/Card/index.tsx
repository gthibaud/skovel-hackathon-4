import { CSSProperties, FC } from 'react';
import { Markdown } from '../Markdown';
import { CardHeader, CardHeaderProps } from './CardHeader';
import './styles.css';

interface CardProps extends CardHeaderProps {
    children: string | JSX.Element | JSX.Element[];
    variant?: '' | 'grid' | 'centered';
    style?: CSSProperties;
    className?: string;
}

export const Card: FC<CardProps> = (props) => {
    const { children, variant = '', style, className } = props;

    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Markdown>{children}</Markdown>;
        }
        return children;
    };

    return (
        <div
            className={`card-container card-container-${variant} ${className}`}
            style={style}
        >
            {props.title || props.actionTo || props.actionElement ? (
                <CardHeader {...props} />
            ) : null}
            <div className={`card-content-${variant}`}>{renderChildren()}</div>
        </div>
    );
};
