import { contentfulClient } from '@/fetch/contentful-client';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { PageTitle } from '@/components/page-title/page-title';
import { TextContent } from '@/components/text-content/text-content';
import { removeAccents } from '@/helpers/remove-accents';

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
        <main>
            <header className="pt-12">
                <div className="w-full px-4 py-6 xl:container mx-auto">
                    <h1 className="font-serif uppercase tracking-wider text-4xl text-orange-500">{removeAccents(pageContent.fields.title)}</h1>
                </div>
            </header>
            <div className="w-full px-4 py-6 xl:container mx-auto">
                <div className="text-sm font-bold py-2 text-gray-500">
                    {format(new Date(pageContent.fields.publicationDate), 'd MMMM, y', { locale: el })}
                </div>

                <div className="py-8">
                    <TextContent content={pageContent.fields.content} /> 
                </div>

            </div>
        </main>
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
