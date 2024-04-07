import { useTheme } from '@emotion/react';
import { UseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';
import { Event } from '../../../../../library/types/Event';
// import { Athlete } from '../../../../types/classes/Athlete';
// import { AthleteQuicklink } from '../../../Athlete/wrappers/quicklink';
// import { AthleteStatsQuicklink } from '../../../AthleteStats/wrappers/quicklink';
// import { MapQuicklinkAthlete } from '../../../Map/wrappers/quicklinkAthlete';

interface EventDetailsProps {
    event: UseQueryResult<Event, unknown>;
    athlete: UseQueryResult<any, unknown>;
}

export const EventDetails: FC<EventDetailsProps> = (props) => {
    const { event, athlete } = props;
    const theme = useTheme();

    const formatMapTitle = () => {
        if (event.data?.athletes[0].distanceFromStart) {
            return `${event.data?.athletes[0].distanceFromStart} Km from start`;
        }
    };

    return athlete.isSuccess ? (
        <>
            {/* {event.data?.athletes[0].distanceFromStart &&
            event.data?.athletes[0].distanceFromStart > 0 ? (
                <MapQuicklinkAthlete
                    athlete={athlete.data}
                    height={230}
                    position={event.data?.athletes[0].position}
                    title={formatMapTitle()}
                />
            ) : (
                <HorizontalContainer>
                    <InfoCircle
                        size={16}
                        color={theme.colors.text.light}
                    />
                    <Typography color="light">Posted after the race.</Typography>
                </HorizontalContainer>
            )} */}
            {/* <AthleteStatsQuicklink
                athlete={athlete.data}
                timestamp={event.data?.publishedAt.getTime()}
            />
            <AthleteQuicklink athlete={athlete.data} /> */}
            todo
        </>
    ) : null;
};
