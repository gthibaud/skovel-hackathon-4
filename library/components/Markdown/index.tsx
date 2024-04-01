import { Skeleton } from '@mui/material';
import { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { MarkdownImage } from './components/MarkdownImage';
import './styles.css';

interface MarkdownProps {
    isLoading?: boolean;
    children?: string;
    className?: string;
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
                <MarkdownImage
                    image={image}
                    alt={alt}
                    width={width}
                    height={height}
                    isPriority={isPriority}
                    hasCaption={hasCaption}
                    caption={caption}
                />
            );
        }
        return <p>{paragraph.children}</p>;
    },
};

export const Markdown: FC<MarkdownProps> = ({ isLoading, children = '', className }) => {
    return isLoading ? (
        <Skeleton
            width="100%"
            height="100%"
        />
    ) : (
        <article className={`markdown ${className}`}>
            <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
        </article>
    );
};
