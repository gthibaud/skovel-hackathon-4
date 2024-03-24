'use client';
import { Skeleton as SkeletonMui } from '@mui/material';
import { FC } from 'react';
import { WidthProps } from '../../props/width';

export interface SkeletonProps extends WidthProps {
    variant?: 'rectangular' | 'text' | 'rounded' | 'circular';
    height?: number | string;
    animation?: 'wave' | 'pulse';
    backgroundColor?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        variant = 'rectangular',
        height = 30,
        animation = 'wave',
        backgroundColor = 'rgba(255, 255, 255, 0.2)',
    } = props;

    return (
        <SkeletonMui
            variant={variant}
            width={'100%'}
            // width={generateWidth(props, '100%')}
            height={height}
            style={{
                borderRadius: variant === 'circular' ? '100%' : 12,
            }}
            animation={animation}
            sx={{
                backgroundColor,
            }}
        />
    );
};
