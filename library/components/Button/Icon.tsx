import { CSSProperties, FC, ReactElement } from 'react';
import { Button as ButtonAria } from 'react-aria-components';
import './styles.css';

export interface IconButtonProps {
    onClick?: (e: any) => void;
    isLoading?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    title?: string; // Title attribute for the button
    icon: ReactElement;
    size?: number;
}

export const IconButton: FC<IconButtonProps> = (props) => {
    const {
        onClick,
        disabled = false,
        size = 'medium',
        isLoading = false,
        style,
        title = 'button',
        icon: Icon,
    } = props;

    const renderIcon = () => {
        return (
            <Icon.type
                {...Icon.props}
                size={size}
                style={{
                    display: 'flex',
                    margin: '0',
                    height: '100%',
                    ...style,
                }}
            />
        );
    };

    return (
        <ButtonAria
            className={`button-icon button-size-${size}`}
            onPressEnd={onClick}
            style={style}
            aria-label={title}
        >
            {isLoading ? '...' : renderIcon()}
        </ButtonAria>
    );
};
