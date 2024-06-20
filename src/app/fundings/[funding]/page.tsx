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

    if (fundingTag) {
        postsData = await contentfulClient.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[all]': fundingTag,
            order: '-fields.publicationDate',
        });
    }

    return (
        <div className="pt-12 px-4 lg:container mx-auto page">
            <EEAGrantsLayout>
                <header>
                    <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">{removeAccents(pageContent.fields.title)}</h1>
                </header>
                <div className="py-8">
                    <TextContent content={pageContent.fields.content} /> 
                </div>
                {fundingTag && (
                    <section className="">
                        <h2 className="font-serif uppercase text-xl sm:text-3xl font-normal text-red-500 tracking-wider leading-none pb-12 pt-2 border-t border-solid border-red-500">Σχετικά άρθρα</h2>
                        {postsData.items.map((item: any) => {
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
    };
}
  