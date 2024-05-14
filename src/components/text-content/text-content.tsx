import { richTextOptions } from '@/helpers/rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface TextContentProps {
    content: any
}

export const TextContent = ({
    content,
}: TextContentProps) => {

    return (
        <div className="content-blocks font-sans leading-loose max-w-3xl text-gray-600 text-base">
            {documentToReactComponents(content, richTextOptions)}
        </div>
    );
};
