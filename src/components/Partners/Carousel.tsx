'use client';

import { partners } from '@/data/partners';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';
import { Tooltip } from '../../../library/components/Tooltip';
import './styles.css';

export const PartnersCarousel: FC = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({
            delay: 2000,
            stopOnUserInput: false,
        }),
    ]);

    return (
        <div
            className="embla"
            ref={emblaRef}
        >
            <div className="embla__container">
                {partners.map((partner, index) => (
                    <div className="embla__slide">
                        <Tooltip title={partner.summary}>
                            <a
                                key={index}
                                href={partner.url}
                                className="partner-container"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="logo-img"
                                />
                            </a>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
};
