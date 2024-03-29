'use client';

import { CSSProperties, FC } from 'react';
import { OverlayArrow, Tooltip as TooltipLabel, TooltipTrigger } from 'react-aria-components';

import './styles.css';

export interface TooltipProps {
    title: string | JSX.Element | null | undefined;
    style?: CSSProperties;
    children: JSX.Element;
    disabled?: boolean;
    arrow?: boolean;
    placement?:
        | 'top'
        | 'right'
        | 'bottom'
        | 'left'
        | 'bottom-end'
        | 'bottom-start'
        | 'left-end'
        | 'left-start'
        | 'right-end'
        | 'right-start'
        | 'top-end'
        | 'top-start'
        | undefined;
}

export const Tooltip: FC<TooltipProps> = ({
    title,
    disabled = false,
    children,
    placement,
    arrow = true,
    style = {},
}) => {
    // if (!title) {
    //     return children;
    // }

    // if (disabled) {
    //     return children;
    // }

    return (
        <TooltipTrigger delay={0}>
            {children}
            <TooltipLabel>
                {arrow && <OverlayArrow />}
                {title}
            </TooltipLabel>
        </TooltipTrigger>
    );

    return (
        <TooltipTrigger
            delay={0}

            // delay={0}
            // PopperProps={{
            //     modifiers: [
            //         {
            //             name: 'offset',
            //             options: {
            //                 offset: [0, -8],
            //             },
            //         },
            //     ],
            // }}
            // componentsProps={{
            //     tooltip: {
            //         sx: {
            //             padding: '8px 12px',
            //             border: `1px solid var(--colors-border)`,
            //             background: 'rgba(26,26,26,0.7)',
            //             backdropFilter: `blur(12px)`,
            //             WebkitBackgroundFilter: `blur(12px)`,
            //             backgroundBlendMode: 'overlay',
            //             '& .MuiTooltip-arrow': {
            //                 background: 'none',
            //                 border: 'none',
            //                 fill: 'rgba(26,26,26,0.7)',
            //                 backdropFilter: `blur(12px)`,
            //                 WebkitBackgroundFilter: `blur(12px)`,
            //                 backgroundBlendMode: 'overlay',
            //             },
            //             borderRadius: '12px',
            //             fontSize: '14px',
            //             lineHeight: '1.4',
            //             color: 'white',
            //             fontFamily: 'var(--fonts-body)',
            //             textAlign: 'center',
            //         },
            //     },
            // }}
        >
            <span style={style}>{children}</span>
            <TooltipLabel
                placement="top"
                // style={{
                //     padding: '8px 12px',
                //     border: `1px solid var(--colors-border)`,
                //     background: 'rgba(26,26,26,0.7)',
                //     backdropFilter: `blur(12px)`,
                //     backgroundBlendMode: 'overlay',
                //     // '& .MuiTooltip-arrow': {
                //     //     background: 'none',
                //     //     border: 'none',
                //     //     fill: 'rgba(26,26,26,0.7)',
                //     //     backdropFilter: `blur(12px)`,
                //     //     WebkitBackgroundFilter: `blur(12px)`,
                //     //     backgroundBlendMode: 'overlay',
                //     // },
                //     borderRadius: '12px',
                //     fontSize: '14px',
                //     lineHeight: '1.4',
                //     color: 'white',
                //     fontFamily: 'var(--fonts-body)',
                //     textAlign: 'center',
                // }}
            >
                <OverlayArrow>
                    <svg
                        width={8}
                        height={8}
                        viewBox="0 0 8 8"
                    >
                        <path d="M0 0 L4 4 L8 0" />
                    </svg>
                </OverlayArrow>
                {title}
            </TooltipLabel>
        </TooltipTrigger>
    );
};
