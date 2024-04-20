// eslint-disable-next-line import/no-extraneous-dependencies
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';

export const richTextOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { title, description, file } = node.data.target.fields;
            return (
                <Image src={`https:${file.url}`} alt={title} width={file.details.image.width} height={file.details.image.height} />
            );
        },
    },
};
