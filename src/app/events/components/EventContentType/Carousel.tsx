import { FC } from 'react';
import { Container } from '../../../../../library/components/Container';
import { ContentCarousel } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentCarouselProps extends EventContentProps {
    content: ContentCarousel;
}

export const EventContentCarousel: FC<EventContentCarouselProps> = (props) => {
    const { content, mode } = props;
    const { images } = content;

    return (
        <Container
            paddingY={2}
            style={{
                marginLeft: '-16px',
                width: 'calc(100% + 32px)',
            }}
        >
            todo carousel
            {/* <Carousel
                clickable={mode === 'full'}
                medias={images.map((image) => {
                    return {
                        id: image.id,
                        url: image.src,
                        source: 'url',
                        type: 'image',
                        src: image.src,
                        alt: image.alt,
                    };
                })}
            /> */}
        </Container>
    );
};
