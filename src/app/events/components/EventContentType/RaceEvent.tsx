import { format } from 'date-fns';
import { t } from 'i18next';
import { FC } from 'react';
import { VerticalContainer } from '../../../../../library/components/Container/Vertical';
import { Typography } from '../../../../../library/components/Typography';
import { ContentRaceEvent } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentRaceEventProps extends EventContentProps {
    content: ContentRaceEvent;
}

export const EventContentRaceEvent: FC<EventContentRaceEventProps> = (props) => {
    const { content, athletes } = props;
    const { eventType, pointId, pointName, happenedAt } = content;

    const generateDescription = (): string => {
        const name = athletes ? athletes[0].displayName : '';
        const date = happenedAt ? format(happenedAt, "EEEE c MMM 'at' p") : null;

        if (eventType === 'withdrawal') {
            return t('feed.data.events.withdrawal.description', { name, date });
        } else if (eventType === 'start') {
            return t('feed.data.events.start.description', { name, date });
        } else if (eventType === 'finish') {
            return t('feed.data.events.finish.description', { name, date });
        } else {
            return t('feed.data.events.checkpoint.description', { name, date });
        }
    };

    return (
        <VerticalContainer
            gap={4}
            // width={'100%'}
        >
            <Typography s={14}>{generateDescription()}</Typography>
        </VerticalContainer>
    );
};
