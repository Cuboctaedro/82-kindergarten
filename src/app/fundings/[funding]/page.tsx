import { PageTitle } from '@/components/page-title/page-title';
import { Post } from '@/components/post/post';
import { TextContent } from '@/components/text-content/text-content';
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
        <div>
            <header className="bg-orange-500">
                <h1 className="text-white font-light text-3xl p-4 md:p-6">{pageContent.fields.title}</h1>
            </header>

            <div className="py-8">
                <TextContent content={pageContent.fields.content} /> 
            </div>
            {fundingTag && (
                <div>
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

                </div>
            )}
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
