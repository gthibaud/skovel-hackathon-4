import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FC } from 'react';

interface CollapseProps {
    in: boolean;
    children: JSX.Element;
    [key: string]: any;
}

export const Collapse: FC<CollapseProps> = (props) => {
    const { in: inProp, children } = props;

    const animate = {
        height: inProp ? 'auto' : 0,
    };

    return (
        <LazyMotion
            features={domAnimation}
            strict
        >
            <div
                aria-expanded={inProp}
                {...props}
            >
                <m.div
                    style={{ overflow: 'hidden' }}
                    initial={{ height: 0, opacity: 1 }}
                    animate={animate}
                    exit={{ height: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </m.div>
            </div>
        </LazyMotion>
    );
};
