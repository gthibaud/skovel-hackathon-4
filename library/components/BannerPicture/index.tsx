import { FC } from 'react';
import './styles.css';

interface BannerPictureProps {
    imageSrc: string;
    imageAlt: string;
    foregroundElement: JSX.Element;
}

export const BannerPicture: FC<BannerPictureProps> = (props) => {
    const { imageSrc, foregroundElement } = props;

    return (
        <div className="banner-picture-container">
            <img
                src={imageSrc}
                alt={props.imageAlt}
                className="banner-picture-image"
            />
            <div className="banner-picture-foreground">{foregroundElement}</div>
        </div>
    );
};
