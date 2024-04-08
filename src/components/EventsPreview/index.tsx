'use client';

import { events } from '@/data/events';
import { ChevronRight } from 'gthibaud-icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { IconButton } from '../../../library/components/Button/Icon';
import { formatRelativeDate } from '../../../library/utils/date';
import './styles.css';

export const EventsPreview: FC = () => {
    const router = useRouter();

    return (
        <div
            className="events-preview-list"
            onClick={() => router.push('/events')}
        >
            {events.slice(0, 3).map((event) => (
                <article
                    className="event-preview"
                    key={event.id}
                >
                    <Image
                        src={event.content.src || '/assets/fallback-cropped.jpg'}
                        alt={event.content.alt}
                        width={56}
                        height={56}
                    />
                    <div className="event-preview-content">
                        <h3>{event.title}</h3>
                        <p>{formatRelativeDate(event.publishedAt)}</p>
                    </div>
                    <IconButton
                        icon={<ChevronRight />}
                        onClick={() => router.push(`/events`)}
                        size={18}
                        style={{
                            fill: 'var(--colors-text-lighter)',
                        }}
                    />
                </article>
            ))}
        </div>
    );
};
