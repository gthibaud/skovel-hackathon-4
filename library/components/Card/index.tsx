import { CSSProperties, FC } from 'react';
import { Link } from '../Link';
import { Markdown } from '../Markdown';
import { CardHeader, CardHeaderProps } from './CardHeader';
import './styles.css';

export interface CardProps extends CardHeaderProps {
    children: string | JSX.Element | JSX.Element[];
    variant?: '' | 'grid' | 'centered';
    style?: CSSProperties;
    className?: string;
    to?: string; // Link to another page
}

export const Card: FC<CardProps> = (props) => {
    const { children, variant = '', style, className, to } = props;

    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Markdown>{children}</Markdown>;
        }
        return children;
    };

    const addLink = (children: JSX.Element) => {
        if (to) {
            return (
                <Link
                    to={to}
                    outline="box"
                    style={{
                        color: 'inherit',
                    }}
                >
                    {children}
                </Link>
            );
        }
        return children;
    };

    return addLink(
        <div
            className={`card-container card-container-${variant} ${className}`}
            style={style}
        >
            {props.title || props.actionTo || props.actionElement ? (
                <CardHeader {...props} />
            ) : null}
            <div className={`card-content-${variant}`}>{renderChildren()}</div>
        </div>,
    );
};
