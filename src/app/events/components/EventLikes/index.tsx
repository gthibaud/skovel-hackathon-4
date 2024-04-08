'use client';

import { Heart, HeartFill } from 'gthibaud-icons-react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from '../../../../../library/components/Button/Icon';
import { Typography } from '../../../../../library/components/Typography';
import { Event } from '../../../../../library/types/Event';
import { numberToString } from '../../../../../library/utils/formatNumbers';

interface EventLikesProps {
    event: Event | undefined;
}

export const EventLikes: FC<EventLikesProps> = (props) => {
    const { event } = props;
    const eventId = event?.id;
    // const { isLiked, addLike, removeLike } = useInteractions();
    const { i18n } = useTranslation();

    const [isLikedState, setIsLikedState] = useState(false);

    // For special events
    if (event && event.content.showLikes === false) {
        return null;
    }

    const handleLikeEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Stop propagation to avoid triggering the click on the parent container
        // e.stopPropagation();

        if (eventId) {
            // if (isLiked(eventId)) {
            //     removeLike(eventId);
            // } else {
            //     addLike(eventId);
            // }
            // TODO call function to upload like or remove like
        }

        // TODO remove that
        setIsLikedState(!isLikedState);
    };

    const isLiked = (eventId: string) => {
        return isLikedState;
    };

    return (
        <div
            style={{
                gap: '4px',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <IconButton
                icon={eventId && isLiked(eventId) ? <HeartFill /> : <Heart />}
                title={'Like'}
                size={24}
                style={{ fill: eventId && isLiked(eventId) ? '#FD1D1D' : 'var(--colors-text)' }}
                isLoading={!event}
                onClick={handleLikeEvent}
            />
            <Typography
                isLoading={!event}
                weight={500}
            >
                {eventId && isLiked(eventId)
                    ? `Vous et ${numberToString(event?.likes, i18n.language)} personnes`
                    : `${numberToString(event?.likes, i18n.language)} j'aime`}
            </Typography>
        </div>
    );
};
