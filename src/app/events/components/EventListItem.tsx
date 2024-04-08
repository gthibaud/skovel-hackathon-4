'use client';

import { FC, useEffect, useRef } from 'react';
import { useIntersection } from '../../../../library/hooks/useIntersection';
// import { ParentWidthProps } from '../../../../library/hooks/useParentWidth';
import { Event } from '../../../../library/types/Event';
// import { useFilter } from '../../Filter/contexts/FilterContext';
import { EventContent } from './EventContentType';
import { EventDescription, EventDescriptionProps } from './EventDescription';
import { EventLikes } from './EventLikes';
import { EventTitle } from './EventMetadata/EventTitle';

interface EventListItemProps extends EventDescriptionProps {
    event: Event;
    updateDisplayedTimestamp?: boolean; // If true, when the event is visible on screen, it updates the displayedTimestamp in the filter context with the date of the event. This is used to update map when the user scrolls through the events list of an athlete.
    viewportDistanceFromTop?: number; // Distance from the top of the viewport to trigger the displayedTimestamp event. This is used to update map when the user scrolls through the events list of an athlete (once the event reaches the header, update the displayed timestamp).
}

export const EventListItem: FC<EventListItemProps> = (props) => {
    const { event, updateDisplayedTimestamp = false, viewportDistanceFromTop } = props;
    const smallLayout = false;
    // const navigate = useNavigate();
    // const { setDisplayedTimestamp } = useFilter();

    const ref = useRef<HTMLDivElement>(null);

    const { isVisible } = useIntersection(ref, 0);

    const handleScroll = () => {
        if (!ref.current || !viewportDistanceFromTop) {
            return;
        }

        const topPosition = ref.current?.getBoundingClientRect().top;
        const bottomPosition = topPosition + ref.current?.getBoundingClientRect().height;
        const distanceFromTopRatio = 100; // This allow to trigger the event 100px before it reaches the top of the viewport

        // Is the event visible on screen and approximately 100px from the top of the header
        const isOnView =
            bottomPosition >= viewportDistanceFromTop &&
            topPosition <= viewportDistanceFromTop + distanceFromTopRatio;

        // If the event is visible on screen, update the displayedTimestamp in the filter context with the date of the event.
        if (isOnView) {
            // setDisplayedTimestamp(event.publishedAt.getTime());
        }
    };

    // On Intersection, add the event listener to the scroll event
    useEffect(() => {
        if (isVisible) {
            window.addEventListener('scroll', handleScroll);
        }

        // Remove the event listener when the event is not in view anymore
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const handleClickEvent = (e: any) => {
        // Stop propagation to avoid triggering the click on the parent container
        e.stopPropagation();
        // Navigate to the event page
        // navigate(generateUri('event', [event.id]));
    };

    return (
        // <HorizontalContainer
        //     align="center"
        //     innerRef={ref}
        //     style={{
        //         display: 'grid',
        //         // TODO
        //         // [theme.breakpoints.down('sm')]: {
        //         //     gridTemplateColumns: '1fr',
        //         // },
        //         gridTemplateColumns: smallLayout
        //             ? '1fr'
        //             : 'minmax(100px, max-content) minmax(80px, max-content) 1fr',
        //         width: '100%',
        //         cursor: 'pointer',
        //     }}
        //     // maxWidth="md"
        //     onClick={handleClickEvent}
        // >
        <article // TODO surface
            style={{
                padding: '22px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                alignItems: 'flex-start',
            }}
            // variant={smallLayout ? 'transparent' : 'default'}
        >
            {/* <VerticalContainer
                gap={8}
            // width={'100%'}
            > */}
            <EventTitle event={event} />
            <EventContent
                content={event.content}
                mode="inline"
                athletes={event.athletes}
            />
            <EventDescription
                event={event}
                textLimit="large"
            />
            <EventLikes event={event} />
            {/* <EventComments event={event} /> */}
            {/* </VerticalContainer> */}
        </article>
    );
};
