import { FC } from 'react';
import { Typography } from '../../../../../library/components/Typography';
import { Event } from '../../../../../library/types/Event';

const TEXT_LIMIT_SMALL = 120;
const TEXT_LIMIT_LARGE = 800;

export interface EventDescriptionProps {
    event: Event | undefined;
    textLimit?: 'small' | 'large';
}

export const EventDescription: FC<EventDescriptionProps> = (props) => {
    const { event, textLimit = 'small' } = props;

    // If the description is empty, return null
    if (!event?.description || (event?.description && event?.description?.length === 0)) {
        return null;
    }

    return (
        <Typography
            isLoading={!event}
            loaderHeight={textLimit === 'small' ? 24 : 80}
            s={14}
            lengthLimit={textLimit === 'small' ? TEXT_LIMIT_SMALL : TEXT_LIMIT_LARGE}
            style={{
                userSelect: 'text',
            }}
        >
            {event?.description}
        </Typography>
    );
};
