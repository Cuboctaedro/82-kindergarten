import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { contentfulClient } from '@/fetch/contentful-client';
import { TextContent } from '@/components/text-content/text-content';
import { removeAccents } from '@/helpers/remove-accents';

const AnouncementPage = async ({
    params,
}: {
    params: {
        anakoinosi: string
    }
}) => {
    const data = await contentfulClient.getEntries({
        content_type: 'announcement',
        'fields.slug[match]': params.anakoinosi,
    });

    const pageContent = data.items[0];

    return (
        <div className="pt-12 px-4 lg:container mx-auto post">
            <header>
                <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">{removeAccents(pageContent.fields.title)}</h1>
                <div className="text-sm font-bold py-2 text-gray-500">
                    {format(new Date(pageContent.fields.publicationDate), 'd MMMM, y', { locale: el })}
                </div>

            </header>

            <div className="py-8">
                <TextContent content={pageContent.fields.content} />
            </div>

        </div>
    );
};

export default AnouncementPage;

export const generateStaticParams = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'announcement',
    });

 
    return data.items.map((item: any) => ({
        anakoinosi: item.fields.slug,
    }));
};
