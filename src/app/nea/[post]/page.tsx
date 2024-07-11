import { contentfulClient } from '@/fetch/contentful-client';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { TextContent } from '@/components/text-content/text-content';
import { removeAccents } from '@/helpers/remove-accents';
import { EEAGrantsLayout } from '@/components/eeagrants-layout/eeagrants-layout';
import { Metadata } from 'next';

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

    let isEeaGrants = false;

    if (pageContent?.fields?.funding && pageContent?.fields?.funding?.fields?.slug == 'eea-grants-spiral-project') {
        isEeaGrants = true;
    }

    return (
        <article className="pt-12 px-4 lg:container mx-auto post">
            <header>
                <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">{removeAccents(pageContent.fields.title)}</h1>
                <div className="text-sm font-bold py-2 text-gray-500">
                    {format(new Date(pageContent.fields.publicationDate), 'd MMMM, y', { locale: el })}
                </div>

            </header>

            <div className="py-8">
                {isEeaGrants && (
                    <EEAGrantsLayout>
                        <TextContent content={pageContent.fields.content} /> 
                    </EEAGrantsLayout>
                )}
                {!isEeaGrants && (
                    <TextContent content={pageContent.fields.content} />
                )}
            </div>

        </article>
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

export async function generateMetadata(
    { params }: { params: {
        post: string
    } },
): Promise<Metadata> {
    const data = await contentfulClient.getEntries({
        content_type: 'blogPost',
        'fields.slug[match]': params.post,
    });

    const pageContent = data.items[0];

    return {
        title: pageContent?.fields?.title,
    };
}
  