import { contentfulClient } from '@/fetch/contentful-client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextOptions } from '@/helpers/rich-text-options';

const PostPage = async ({
    params,
}: {
    params: {
        post: string
    }
}) => {
    const data = await contentfulClient.getEntries({
        content_type: 'blogPost',
        'fields.slug[match]': params.post,
    });

    const pageContent = data.items[0];

    return (
        <div>
            <h1>{pageContent.fields.title}</h1>
            <div>
                <div>{documentToReactComponents(pageContent.fields.content, richTextOptions)}</div> 
            </div>
        </div>
    );
};

export default PostPage;

export const generateStaticParams = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'blogPost',
    });

 
    return data.items.map((item: any) => ({
        post: item.slug,
    }));
};
