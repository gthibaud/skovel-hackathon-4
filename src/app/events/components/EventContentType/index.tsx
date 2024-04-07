import { FC } from 'react';
import {
    ContentAudio,
    ContentCarousel,
    ContentImage,
    ContentLink,
    ContentPodcast,
    ContentPoll,
    ContentRaceEvent,
    ContentRecap,
    ContentVideo,
} from '../../../../../library/types/Event/eventContent';
import { EventContentAudio } from './Audio';
import { EventContentCarousel } from './Carousel';
import { EventContentImage } from './Image';
import { EventContentLink } from './Link';
import { EventContentPodcast } from './Podcast';
import { EventContentPoll } from './Poll';
import { EventContentRaceEvent } from './RaceEvent';
import { EventContentRecap } from './Recap';
import { EventContentVideo } from './Video';
import { EventContentProps } from './props';

export const EventContent: FC<EventContentProps> = (props) => {
    const { content, mode = 'full', athletes } = props;

    if (!content) return <></>;

    switch (content.type) {
        case 'recap':
            return <EventContentRecap content={content as ContentRecap} />;
        case 'image':
            return <EventContentImage content={content as ContentImage} />;
        case 'poll':
            return <EventContentPoll content={content as ContentPoll} />;
        case 'video':
            return <EventContentVideo content={content as ContentVideo} />;
        case 'link':
            return <EventContentLink content={content as ContentLink} />;
        case 'audio':
            return <EventContentAudio content={content as ContentAudio} />;
        case 'podcast':
            return <EventContentPodcast content={content as ContentPodcast} />;
        case 'carousel':
            return (
                <EventContentCarousel
                    content={content as ContentCarousel}
                    mode={mode}
                />
            );
        case 'raceEvent':
            return (
                <EventContentRaceEvent
                    content={content as ContentRaceEvent}
                    mode={mode}
                    athletes={athletes}
                />
            );
        default:
            return <></>;
    }
};
