import Image from 'next/image';
import { FC } from 'react';
import './styles.css';

interface HeroProps {
    imageSrc: string;
    imageAlt: string;
    foregroundElement: JSX.Element;
}

export const Hero: FC<HeroProps> = (props) => {
    const { imageSrc, foregroundElement } = props;

    return (
        <div className="banner-picture-container">
            <Image
                src={imageSrc}
                alt={props.imageAlt}
                width={1000}
                height={600}
                className="banner-picture-image"
            />
            <div className="banner-picture-foreground">{foregroundElement}</div>
        </div>
    );
};
