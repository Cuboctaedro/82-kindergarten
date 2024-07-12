import { EEAGrantsHeader } from '@/components/eeagrants-layout/eeagrants-header';
import { TextContent } from '@/components/text-content/text-content';
import { contentfulClient } from '@/fetch/contentful-client';
import { eeaRichTextOptions } from '@/helpers/eea-rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Metadata } from 'next';

const PublicationPage = async ({
    params,
}: {
    params: {
        slug: string
    }
}) => {
    const data = await contentfulClient.getEntries({
        content_type: 'booklet',
        'fields.slug[match]': params.slug,
    });

    const pageContent = data.items[0];

    let isEeaGrants = false;

    if (pageContent?.fields?.parent && pageContent?.fields?.parent?.fields?.slug == 'eea-grants-spiral-project') {
        isEeaGrants = true;
    }

    return (
        <article className="pt-12 px-4 lg:container mx-auto post">

            <div className="py-8">
                {isEeaGrants && (
                    <EEAGrantsHeader />
                )}
                <header className="pb-8 md:pb-16 xl:pb-24 text-eea-blue">
                    <h1 className="font-eeasans font-bold text-4xl ">{pageContent.fields.title}</h1>
                    <p className="font-eeasans font-bold text-2xl ">{pageContent.fields.subtitle}</p>
                    <p className="font-eeasans pt-2 text-xl ">{pageContent.fields.authors}</p>
                </header>

                <div className="w-full flex flex-wrap items-start justify-between">
                    <div className="w-full lg:w-2/3 lg:pr-4 flex-none">
                        <div className="eea-booklet font-eeasans leading-loose max-w-3xl text-gray-600 text-base">
                            {documentToReactComponents(pageContent.fields.content, eeaRichTextOptions)}
                        </div>

                    </div>
                    <div className="w-full lg:w-1/3 lg:pl-4 flex-none">
                        <div>
                            <a href="/booklet-spiral-screen.pdf" target="_blank" className="bg-red-600 inline-block text-white uppercase px-6 py-4">Download as PDF</a>
                        </div>
                        <aside className="eea-booklet font-eeasans leading-loose max-w-3xl text-gray-600 text-base">
                            <h2>Acknowledgments</h2>
                            {documentToReactComponents(pageContent.fields.credits, eeaRichTextOptions)}
                        </aside>

                    </div>
                </div>


            </div>

        </article>

    );
};

export default PublicationPage;

export const generateStaticParams = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'booklet',
    });

 
    return data.items.map((item: any) => ({
        slug: item.fields.slug,
    }));
};

export async function generateMetadata(
    { params }: { params: {
        slug: string
    } },
): Promise<Metadata> {
    const data = await contentfulClient.getEntries({
        content_type: 'booklet',
        'fields.slug[match]': params.slug,
    });

    const pageContent = data.items[0];

    return {
        title: pageContent?.fields?.title,
        openGraph: {
            title: pageContent?.fields?.title,
            images: [
                {
                    url: 'https://82-kindergarten.netlify.app/booklet-cover.jpg',
                },
            ],
        },
    };
}
  