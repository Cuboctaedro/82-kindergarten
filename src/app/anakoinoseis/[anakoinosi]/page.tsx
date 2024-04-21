import { PageTitle } from '@/components/page-title/page-title';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { contentfulClient } from '@/fetch/contentful-client';
import { richTextOptions } from '@/helpers/rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TextContent } from '@/components/text-content/text-content';

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
        <div>
            <header className="bg-orange-500">
                <h1 className="text-white font-light text-3xl p-4 md:p-6">{pageContent.fields.title}</h1>
            </header>
            <div className="bg-blue-500 text-white p-4 md:px-6 mt-2 text-sm font-bold py-2">{format(new Date(pageContent.fields.publicationDate), 'd MMMM, y', { locale: el })}</div>

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
