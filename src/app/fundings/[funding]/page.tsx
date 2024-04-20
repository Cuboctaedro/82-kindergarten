import { PageTitle } from '@/components/page-title/page-title';
import { contentfulClient } from '@/fetch/contentful-client';
import { richTextOptions } from '@/helpers/rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const FundingPage = async ({
    params,
}: {
    params: {
        funding: string
    }
}) => {
    const data = await contentfulClient.getEntries({
        content_type: 'funding',
        'fields.slug[match]': params.funding,
    });

    const pageContent = data.items[0];

    return (
        <div className="relative px-6  bg-white shadow-02 mr-12 ml-6">
            <div className="relative top-12 pb-6">

                <header className="-ml-12 rotate-1">
                    <PageTitle>{pageContent.fields.title}</PageTitle>
                </header>

                
                <div className="py-12">
                    <div>{documentToReactComponents(pageContent.fields.content, richTextOptions)}</div> 
                </div>
            </div>
        </div>
    );
};

export default FundingPage;

export const generateStaticParams = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'funding',
    });

 
    return data.items.map((item: any) => ({
        funding: item.slug,
    }));
};
