import { getDownloadURL, ref } from 'firebase/storage';
import { FC, useEffect, useState } from 'react';
import { VideoPlayer } from '../../../../../library/components/VideoPlayer';
import { ContentVideo } from '../../../../../library/types/Event/eventContent';
import { storage } from '../../../../api/firebase';
import { EventContentProps } from './props';

interface EventContentVideoProps extends EventContentProps {
    content: ContentVideo;
}

export const EventContentVideo: FC<EventContentVideoProps> = (props) => {
    const { content } = props;
    const { src, id } = content;

    const [thumbnailSrc, setThumbnailSrc] = useState<string>('');

    useEffect(() => {
        getDownloadURL(ref(storage, `/medias/compressed/small/thumb_${id}_100x100`)).then((url) => {
            setThumbnailSrc(url);
        });
    }, [src]);

    return (
        <VideoPlayer
            src={src}
            thumbnailSrc={thumbnailSrc}
            pauseVideoOutsideView
        />
    );
};
