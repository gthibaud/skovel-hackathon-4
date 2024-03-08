import { Skeleton } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './styles.css';

interface MarkdownProps {
    isLoading?: boolean;
    children?: string;
}

const MarkdownComponents: object = {
    p: (paragraph: { children?: boolean; node?: any }) => {
        const { node } = paragraph;

        if (node.children[0].tagName === 'img') {
            const image = node.children[0];
            const metastring = image.properties.alt;
            const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
            const metaWidth = metastring.match(/{([^}]+)x/);
            const metaHeight = metastring.match(/x([^}]+)}/);
            const width = metaWidth ? metaWidth[1] : '768';
            const height = metaHeight ? metaHeight[1] : '432';
            const isPriority = metastring?.toLowerCase().match('{priority}');
            const hasCaption = metastring?.toLowerCase().includes('{caption:');
            const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

            return (
                <div className="postImgWrapper">
                    <Image
                        src={image.properties.src}
                        width={width}
                        height={height}
                        className="postImg"
                        alt={alt}
                        priority={isPriority}
                    />
                    <div
                        className="caption"
                        aria-label={alt}
                    >
                        <i>{alt}</i>
                    </div>
                </div>
            );
        }
        return <p>{paragraph.children}</p>;
    },
};

export const Markdown: FC<MarkdownProps> = ({ isLoading, children = '' }) => {
    return isLoading ? (
        <Skeleton
            width="100%"
            height="100%"
        />
    ) : (
        <ReactMarkdown
            className="markdown"
            components={MarkdownComponents}
        >
            {children}
        </ReactMarkdown>
    );
};
