import { FC } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../../library/components/Button';
import { Event } from '../../../../../library/types/Event';
import { numberToString } from '../../../../../library/utils/formatNumbers';

interface EventCommentsProps {
    event: Event | undefined;
}

export const EventComments: FC<EventCommentsProps> = (props) => {
    const { event } = props;
    const { i18n } = useTranslation();

    // For special events
    if (event && event.content.showComments === false) {
        return null;
    }

    const handleShowComments = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Stop propagation to avoid triggering the click on the parent container
        e.stopPropagation();

        // TODO: Implement comments
        toast.error('Comments are not available yet.');
    };

    const numberOfComments = 4;
    const numberOfCommentsFormatted = numberToString(numberOfComments, i18n.language);

    return (
        <Button
            // background="transparent"
            style={{ paddingLeft: 0, paddingTop: 0 }}
            // textStyle={{ fontSize: 13 }}
            // color="link"
            onClick={handleShowComments}
        >
            {`See ${numberOfCommentsFormatted} comments`}
        </Button>
    );
};
