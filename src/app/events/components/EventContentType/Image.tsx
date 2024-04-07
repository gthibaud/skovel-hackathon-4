'use client';
import Image from 'next/image';
import { FC, ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ContentImage } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentImageProps extends EventContentProps {
    content: ContentImage;
}

export const EventContentImage: FC<EventContentImageProps> = (props) => {
    const { content } = props;
    const { src, alt, fileType: type, id } = content;

    return (
        <Zoom ZoomContent={CustomZoomContent as any}>
            <Image
                src={src}
                width={580}
                height={580}
                className="postImg"
                alt={alt}
                priority={false}
                style={{
                    objectFit: 'contain',
                }}
            />
        </Zoom>
    );
};

declare const enum ModalState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    UNLOADED = 'UNLOADED',
    UNLOADING = 'UNLOADING',
}

interface CustomZoomContentProps {
    img: any;
    buttonUnzoom: ReactElement<HTMLButtonElement>;
    modalState: ModalState;
    onUnzoom: () => void;
}

const CustomZoomContent: FC<CustomZoomContentProps> = (props) => {
    const { buttonUnzoom, modalState, img } = props;

    const [isLoaded, setIsLoaded] = useState(false);
    const [imgPosition, setImgPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

    useLayoutEffect(() => {
        if (modalState === 'LOADED') {
            setIsLoaded(true);
        } else if (modalState === 'UNLOADING') {
            setIsLoaded(false);
        }
    }, [modalState]);

    // Get the position of the image
    useEffect(() => {
        const imgElement = img?.ref?.current;

        if (imgElement) {
            setImgPosition(imgElement.getBoundingClientRect());
        }
    }, [img]);

    return (
        <>
            {buttonUnzoom}
            <figure>
                {img}
                <figcaption
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        position: 'absolute',
                        top: imgPosition.top + imgPosition.height + 10,
                        left: imgPosition.left,
                        width: imgPosition.width,
                        textAlign: 'center',
                        transition: 'opacity 200ms ease-out',
                    }}
                >
                    {img.props?.alt}
                </figcaption>
            </figure>
        </>
    );
};
