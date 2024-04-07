import { FC } from 'react';
import { Event } from '../../../../../library/types/Event';

interface EventAuthorProps {
    author: Event['author'] | undefined;
}

export const EventAuthor: FC<EventAuthorProps> = (props) => {
    const { author } = props;

    if (!author) {
        return null;
    }

    return <>{author.displayName}&nbsp;•&nbsp;</>;
};
