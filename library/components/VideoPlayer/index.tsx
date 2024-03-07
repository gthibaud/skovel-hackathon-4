'use client';

import { FC, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './styles.css';

interface VideoProps extends ReactPlayerProps {
    src: string;
    thumbnailSrc?: string;
    // Pause the video when it is outside the view
    pauseVideoOutsideView?: boolean;
    height?: number | string;
}

export const VideoPlayer: FC<VideoProps> = (props) => {
    const {
        src,
        thumbnailSrc,
        height = 'auto',
        pauseVideoOutsideView: stopVideoOutsideView = true,
        borderRadius = 'primary',
    } = props;

    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisibleForFirstTime, setIsVisibleForFirstTime] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const thumbnailRef = useRef<HTMLImageElement | null>(null);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0,
    });

    // When the component is in view for the first time, start to load the video source
    if (inView && !isVisibleForFirstTime) {
        setIsVisibleForFirstTime(true);
    }

    // When the component is in view or outside, play or pause the video
    if (inView && !isVisible) {
        setIsVisible(true);
    } else if (!inView && isVisible) {
        setIsVisible(false);
    }

    return (
        <div
            ref={ref}
            style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--border-radius)',
                transition: 'all 200ms ease-out',
                height,
                width: '100%',
            }}
        >
            <div
                style={{
                    filter: 'blur(20px)',
                    width: '100%',
                    height,
                    overflow: 'hidden',
                    transform: 'scale(1.1)',
                    zIndex: isLoaded ? 0 : 1,
                    position: 'absolute',
                    top: 0,
                }}
            >
                {/* <Image
                    src={thumbnailSrc}
                    innerRef={thumbnailRef}
                    alt="thumbnail"
                    titling={false}
                    roundedCorners={false}
                    loaderHeight={600}
                    style={{
                        opacity: isLoaded ? 0 : 1,
                        transition: 'all 0.9s ease-in-out',
                        width: '100%',
                        height,
                        zoom: 1.1,
                    }}
                /> */}
            </div>
            {isVisibleForFirstTime ? (
                <ReactPlayer
                    controls
                    url={src}
                    playing={stopVideoOutsideView ? isVisible : true}
                    loop
                    playsinline
                    muted
                    width={'100%'}
                    height={height}
                    onReady={() => setIsLoaded(true)}
                    style={{
                        position: 'relative',
                        zIndex: isLoaded ? 1 : 0,
                        opacity: isLoaded ? 1 : 0,
                        transition: 'all 0.9s ease-in-out',
                    }}
                    className="react-player"
                    {...props}
                />
            ) : null}
        </div>
    );
};
