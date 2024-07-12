import { EEAGrantsLayout } from '@/components/eeagrants-layout/eeagrants-layout';
import { Post } from '@/components/post/post';
import { TextContent } from '@/components/text-content/text-content';
import { contentfulClient } from '@/fetch/contentful-client';
import { removeAccents } from '@/helpers/remove-accents';
import { Metadata } from 'next';

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

    const fundingTag = pageContent.metadata.tags.length > 0 ? pageContent.metadata.tags[0].sys.id : null;

    let postsData = null;

    if (params.funding == 'eea-grants-spiral-project') {
        postsData = await contentfulClient.getEntries({
            content_type: 'blogPost',
            'fields.category': 'EEA Grants',
            order: '-fields.publicationDate',
        });
    }

    return (
        <div className="pt-12 px-4 lg:container mx-auto page">
            <EEAGrantsLayout>
                <header>
                    <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">{removeAccents(pageContent.fields.title)}</h1>
                </header>
                <div className="w-full flex flex-wrap items-start justify-between">
                    <div className="w-full lg:w-2/3 lg:pr-4 flex-none order-2 lg:order-1">
                        <div className="py-8">
                            <TextContent content={pageContent.fields.content} /> 
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:pl-4 flex-none order-1 lg:order-2">
                        {params.funding == 'eea-grants-spiral-project' && (
                            <div className="py-8">
                                <h2 className="font-serif uppercase tracking-wider text-2xl">Εκπαιδευτικό υλικό / Educationla material</h2>
                                <p className="pt-3">
                                    <a href="/booklet-spiral-screen.pdf" target="_blank" className="text-red-600 inline-block font-bold">Download</a>
                                </p>
                                <p className="pt-3">
                                    <a href="/publications/enabling-inclusion-of-refugee-children-in-preschool-settings" target="_blank" className="text-red-600 inline-block font-bold">Read Online</a>
                                </p>
                            </div>
                        )}

                    </div>
                </div>
                {fundingTag && (
                    <section className="">
                        <h2 className="font-serif uppercase text-xl sm:text-3xl font-normal text-red-500 tracking-wider leading-none pb-12 pt-2 border-t border-solid border-red-500">Σχετικά άρθρα</h2>
                        {postsData !== null && postsData.items.map((item: any) => {
                            const image = item.fields.coverImage.fields; 
                            return (
                                <div key={item.fields.slug} className="pb-6 w-full">
                                    <Post
                                        slug={item.fields.slug}
                                        title={item.fields.title}
                                        introduction={item.fields.introduction}
                                        publicationDate={item.fields.publicationDate}
                                        image={{
                                            url: image.file.url,
                                            width: image.file.details.image.width,
                                            height: image.file.details.image.height,
                                        }}
                                    />
                                </div>
                            );
                        })}

                    </section>
                )}
            </EEAGrantsLayout>
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

export async function generateMetadata(
    { params }: { params: {
        funding: string
    } },
): Promise<Metadata> {
    const data = await contentfulClient.getEntries({
        content_type: 'funding',
        'fields.slug[match]': params.funding,
    });

    const pageContent = data.items[0];

    return {
        title: pageContent?.fields?.title,
        description: pageContent?.fields?.summary,
        openGraph: {
            title: pageContent?.fields?.title as string,
            description: pageContent?.fields?.summary as string,
            images: [
                {
                    url: pageContent?.fields?.image?.fields?.file.url as string,
                    width: pageContent?.fields?.image?.fields?.file.details.image.width as number,
                    height: pageContent?.fields?.image?.fields?.file.details.image.height as number,
                },
            ],
        },
    };
}
  