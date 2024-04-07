import { FC } from 'react';
import { ContentLink } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentAudioProps extends EventContentProps {
    content: ContentLink;
}

export const EventContentAudio: FC<EventContentAudioProps> = (props) => {
    const { src, type } = props.content;

    return (
        <audio
            controls
            preload="none"
        >
            <source
                src={src}
                type={type}
            />
        </audio>
    );
};
