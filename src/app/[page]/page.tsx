import { PageTitle } from '@/components/page-title/page-title';
import { contentfulClient } from '@/fetch/contentful-client';
import { richTextOptions } from '@/helpers/rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Page = async ({
    params,
}: {
    params: {
        page: string
    }
}) => {
    const data = await contentfulClient.getEntries({
        content_type: 'page',
        'fields.slug[match]': params.page,
    });

    const pageContent = data.items[0];

    return (
        <div className="bg-white shadow-02 p-6 mr-12">
            <div className="-mr-12 rotate-1 mt-3">
                <PageTitle>{pageContent.fields.title}</PageTitle>
            </div>
            <div className="py-12">
                <div>{documentToReactComponents(pageContent.fields.content, richTextOptions)}</div> 
            </div>
        </div>
    );
};

export default Page;

export const generateStaticParams = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'page',
    });

 
    return data.items.map((item: any) => ({
        page: item.slug,
    }));
};
