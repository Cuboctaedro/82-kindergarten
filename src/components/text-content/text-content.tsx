import Markdown from 'react-markdown';
import styles from './text-content.module.css';

interface TextContentProps {
    content: string
}

export const TextContent = ({
    content,
}: TextContentProps) => {

    return (
        <div className={`font-sans leading-relaxed ${styles.content} max-w-3xl text-gray-800`}>
            <Markdown>{content}</Markdown>
        </div>
    );
};
