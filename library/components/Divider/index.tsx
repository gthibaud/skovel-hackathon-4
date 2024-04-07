import { FC } from 'react';
import {
    generateMarginBottom,
    generateMarginLeft,
    generateMarginRight,
    generateMarginTop,
    MarginProps,
} from '../../props/margin';
import './styles.css';

interface DividerProps extends MarginProps {
    children: JSX.Element | string | undefined; // Text to display in the middle of the divider. Only available for horizontal orientation
    color?: string;
    orientation?: 'horizontal' | 'vertical';
    weight?: number;
}

export const Divider: FC<DividerProps> = (props) => {
    const { color = 'primary', orientation = 'vertical', children, weight = 2 } = props;

    // Generate size
    const size = '100%';

    // Generate CSS properties that depends on vertical or horizontal orientation
    const generateOrientationDependantStyle = () => {
        if (orientation === 'horizontal') {
            return {
                borderTop: children ? 'none' : `${weight}px solid var(--colors-border)`,
                borderRight: 'none',
                width: size,
                height: 0,
            };
        } else {
            return {
                borderTop: 'none',
                borderRight: 'var(--colors-border)',
                width: 0,
                height: size,
            };
        }
    };

    // If text is provided, render a horizontal divider with text in the middle
    if (children) {
        return (
            <div
                className="hr-text"
                style={{
                    borderLeft: 'none',
                    borderBottom: 'none',
                    marginTop: generateMarginTop(props, 0),
                    marginBottom: generateMarginBottom(props, 0),
                    marginRight: generateMarginRight(props, 'auto'),
                    marginLeft: generateMarginLeft(props, 'auto'),
                    ...generateOrientationDependantStyle(),
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                }}
            >
                <p className="hr-text-content">{children}</p>
            </div>
        );
    }

    // Otherwise, render a normal divider
    return (
        <hr
            style={{
                borderLeft: 'none',
                borderBottom: 'none',
                marginTop: generateMarginTop(props, 0),
                marginBottom: generateMarginBottom(props, 0),
                marginRight: generateMarginRight(props, 'auto'),
                marginLeft: generateMarginLeft(props, 'auto'),
                ...generateOrientationDependantStyle(),
            }}
        />
    );
};
