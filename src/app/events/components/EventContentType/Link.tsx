import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ContentLink } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentLinkProps extends EventContentProps {
    content: ContentLink;
}

export const EventContentLink: FC<EventContentLinkProps> = (props) => {
    const { src, alt } = props.content;

    return <Link to={src}>{alt || src}</Link>;
};
