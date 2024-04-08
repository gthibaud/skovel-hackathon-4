import { t } from 'i18next';
import { FC } from 'react';
import { VerticalContainer } from '../../../../../library/components/Container/Vertical';
import { Event } from '../../../../../library/types/Event';
import { ContentRaceEvent } from '../../../../../library/types/Event/eventContent';
import { formatRelativeDate } from '../../../../../library/utils/date';
import { EventAthletes } from './EventAthletes';
import { EventAuthor } from './EventAuthor';
import { EventCategories } from './EventCategories';

export interface EventTitleProps {
    event: Event;
}

export const EventTitle: FC<EventTitleProps> = (props) => {
    const { event } = props;

    // For special events
    if (event && event.content.showMedata === false) {
        return null;
    }

    const generateRaceEventTitle = (
        eventType: ContentRaceEvent['eventType'],
        pointName: string | undefined,
    ) => {
        if (eventType === 'withdrawal') {
            return t('feed.data.events.dnf.title');
        } else if (eventType === 'start') {
            return t('feed.data.events.start.title');
        } else if (eventType === 'finish') {
            return t('feed.data.events.finish.title');
        } else {
            return pointName;
        }
    };

    return (
        <header
            style={{
                gap: '8px',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {event.content.type === 'raceEvent' ? (
                <img
                    src={`/img/FeedIcon-${(event.content as ContentRaceEvent).eventType}.png`}
                    style={{
                        width: 'auto',
                        height: '32px',
                    }}
                />
            ) : null}
            <VerticalContainer>
                {(event.title || event.content.type === 'raceEvent') && (
                    <h2
                        style={{
                            fontSize: '18px',
                        }}
                    >
                        {event.title ||
                            (event.content.type === 'raceEvent' &&
                                generateRaceEventTitle(
                                    (event.content as ContentRaceEvent).eventType,
                                    (event.content as ContentRaceEvent).pointName,
                                ))}
                    </h2>
                )}
                <p
                    style={{
                        color: 'var(--colors-text-lighter)',
                        fontWeight: 500,
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <EventAthletes athletes={event.athletes} />
                    <EventAuthor author={event.author} />
                    <EventCategories categories={event.categories} />
                    {formatRelativeDate(event.publishedAt)}
                </p>
            </VerticalContainer>
        </header>
    );
};
