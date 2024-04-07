import { CSSProperties } from 'react';
import { HeightProps } from '../../../props/height';
import { CardProps } from '../../_Card/Card';

export type WidgetSize = 'small' | 'medium' | 'large';
export interface WidgetWrapperProps extends CardProps, HeightProps {
    size?: WidgetSize;
    style?: CSSProperties;
    type?: 'map' | 'default';
}

export interface WidgetProps {
    size?: WidgetSize;
}
