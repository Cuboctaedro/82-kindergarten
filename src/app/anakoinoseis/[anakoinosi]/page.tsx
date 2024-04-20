import { PageTitle } from '@/components/page-title/page-title';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { contentfulClient } from '@/fetch/contentful-client';
import { richTextOptions } from '@/helpers/rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
        <div className="relative px-6  bg-white shadow-02 mr-12 ml-6">
            <div className="relative top-12 pb-6">

                <header className="-ml-12 rotate-1">
                    <PageTitle>{pageContent.fields.title}</PageTitle>
                </header>

                <div className=" -mr-12 bg-yellow-500 text-yellow-900 px-6 py-4 shadow-04 font-serif text-lg -rotate-1">
                    {format(pageContent.fields.publicationDate, 'd MMMM, y', { locale: el })}
                </div>
                
                <div className="py-12">
                    <div>{documentToReactComponents(pageContent.fields.content, richTextOptions)}</div> 
                </div>
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
        anakoinosi: item.slug,
    }));
};
