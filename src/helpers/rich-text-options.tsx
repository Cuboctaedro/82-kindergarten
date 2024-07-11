// eslint-disable-next-line import/no-extraneous-dependencies
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';

export const richTextOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { title, description, file } = node.data.target.fields;

            if (file.contentType !== 'application/pdf') {
                return (
                    <div className="pb-6">
                        <figure className="border border-solid border-gray-500 p-4">
                            <Image src={`https:${file.url}`} alt={title} width={file.details.image.width} height={file.details.image.height} className="mb-3" />
                            <figcaption className="text-sm text-gray-600">{title}</figcaption>
                        </figure>
                    </div>
                );
            }
        },
    },
};
