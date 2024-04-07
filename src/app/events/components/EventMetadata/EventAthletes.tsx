/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { FC } from 'react';
import { Event } from '../../../../../library/types/Event';

interface EventAthletesProps {
    athletes: Event['athletes'] | undefined;
}

export const EventAthletes: FC<EventAthletesProps> = (props) => {
    const theme = useTheme();

    const formatAthletes = (athletes: Event['athletes'] | undefined) => {
        if (!athletes || athletes.length === 0) return null;

        const athletesFormatted: JSX.Element[] = [];

        athletes.forEach((athlete) => {
            athletesFormatted
                .push
                // <Link
                //     key={athlete.id}
                //     to={athlete.getUrl()}
                //     css={{
                //         display: 'flex',
                //         alignItems: 'center',
                //         gap: 4,
                //         color: `${theme.colors.text.link} !important`,
                //         textDecoration: 'none',
                //         ':hover': {
                //             textDecoration: 'underline',
                //             color: theme.colors.text.link,
                //         },
                //     }}
                // >
                //     <Avatar
                //         src={athlete.profileImageSrc}
                //         alt={athlete.displayName}
                //         size={18}
                //     />
                //     {athlete.displayName}
                // </Link>,
                ();
        });

        // Add a comma between each athlete
        for (let i = 0; i < athletesFormatted.length; i++) {
            if (i !== 0) {
                athletesFormatted.splice(i, 0, <span>, </span>);
            }
        }

        return athletesFormatted;
    };

    const athletesListFormatted = formatAthletes(props.athletes);

    return athletesListFormatted && athletesListFormatted.length > 0 ? (
        <>{athletesListFormatted}&nbsp;•&nbsp;</>
    ) : null;
};
