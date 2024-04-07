import { useTheme } from '@emotion/react';
import { FC, useState } from 'react';
import { Skeleton } from '../../../../../library/components/Skeleton';
import { Typography } from '../../../../../library/components/Typography';
import { ContentPodcast } from '../../../../../library/types/Event/eventContent';
import { EventContentProps } from './props';

interface EventContentPodcastProps extends EventContentProps {
    content: ContentPodcast;
}

const PODCAST_HEIGHT = 152;

export const EventContentPodcast: FC<EventContentPodcastProps> = (props) => {
    const { src, platform } = props.content;
    const theme = useTheme();

    const [loadingStatus, setLoadingStatus] = useState<'loading' | 'success' | 'error'>('loading');

    switch (platform) {
        case 'spotify':
            return (
                <>
                    {loadingStatus === 'error' && (
                        <Typography color="light">Error loading podcast.</Typography>
                    )}
                    {loadingStatus === 'loading' && <Skeleton height={PODCAST_HEIGHT} />}
                    <iframe
                        src={src}
                        width="100%"
                        height={loadingStatus === 'success' ? PODCAST_HEIGHT : '0'}
                        style={{
                            borderRadius: theme.radius.small,
                        }}
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        onLoad={() => setLoadingStatus('success')}
                        onError={() => setLoadingStatus('error')}
                    />
                </>
            );
        default:
            return <Typography color="light">Podcast platform not supported for now.</Typography>;
    }
};
