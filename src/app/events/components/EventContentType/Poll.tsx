import { useTheme } from '@emotion/react';
import { t } from 'i18next';
import { FC } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HorizontalContainer } from '../../../../../library/components/Container/Horizontal';
import { VerticalContainer } from '../../../../../library/components/Container/Vertical';
import { Typography } from '../../../../../library/components/Typography';
import { ContentPoll } from '../../../../../library/types/Event/eventContent';
import { formatRelativeDate } from '../../../../../library/utils/date';
import { numberToString } from '../../../../../library/utils/formatNumbers';
import { EventContentProps } from './props';

interface EventContentPollProps extends EventContentProps {
    content: ContentPoll;
}

export const EventContentPoll: FC<EventContentPollProps> = (props) => {
    const { content } = props;
    const { closesAt } = content;

    const options: ContentPoll['options'] = content.options.sort(
        (a, b) => b.votesCount - a.votesCount,
    );

    return (
        <VerticalContainer gap={8}>
            <Typography
                color="light"
                size={13}
            >
                {closesAt >= new Date()
                    ? t('feed.feedbacks.poll.closeDate')
                    : t('feed.feedbacks.poll.closedSince')}{' '}
                {formatRelativeDate(closesAt)}.
            </Typography>
            <VerticalContainer gap={6}>
                {options.map((option: any) => (
                    <FeedEventPollOption
                        key={option.id}
                        text={option.label}
                        votes={option.votesCount}
                        voted={false}
                        displayVotes={closesAt >= new Date()}
                    />
                ))}
            </VerticalContainer>
        </VerticalContainer>
    );
};

interface FeedEventPollOptionProps {
    text: string;
    votes: number;
    voted: boolean;
    displayVotes: boolean;
}

export const FeedEventPollOption: FC<FeedEventPollOptionProps> = ({
    text,
    votes,
    voted,
    displayVotes,
}) => {
    const theme = useTheme();
    const { i18n } = useTranslation();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        toast.error(t('base.feedbacks.notAvailable'));
    };

    return (
        <HorizontalContainer
            spaceBetween
            gap={8}
            py={10}
            px={14}
            style={{
                backgroundColor: theme.colors.surface.primary,
                borderRadius: theme.radius.primary,
                border: `1px solid ${theme.colors.divider.primary}`,
                cursor: 'pointer',
                transition: 'transform 0.1s ease-in-out',
                // '&:hover': {
                //     backgroundColor: theme.colors.surface.secondary,
                //     transform: 'scale(1.005)',
                // },
            }}
            onClick={handleClick}
        >
            <Typography>{text}</Typography>
            <Typography>
                {t('feed.data.poll.votesCount', { votes: numberToString(votes, i18n.language) })}
            </Typography>
        </HorizontalContainer>
    );
};
