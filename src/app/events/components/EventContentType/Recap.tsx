import { FC } from 'react';
import { ContentRecap } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentRecapProps extends EventContentProps {
    content: ContentRecap;
}

export const EventContentRecap: FC<EventContentRecapProps> = (props) => {
    const { content } = props;

    return <p>todo</p>;
};
