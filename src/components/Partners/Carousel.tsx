'use client';

import { partners } from '@/data/partners';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
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
                    <div
                        className="embla__slide"
                        key={index}
                    >
                        <Tooltip title={partner.summary}>
                            <a
                                key={index}
                                href={partner.url}
                                className="partner-container"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="logo-img"
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
};
