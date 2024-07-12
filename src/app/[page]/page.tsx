import { TextContent } from '@/components/text-content/text-content';
import { contentfulClient } from '@/fetch/contentful-client';
import { removeAccents } from '@/helpers/remove-accents';
import { Metadata } from 'next';

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

    let isContact = false;

    if (pageContent?.metadata?.tags && pageContent.metadata.tags.length > 0) {
        const hasContact = pageContent.metadata.tags.findIndex((tag: any) => (tag.sys.id == 'contactPage'));
        if (hasContact !== -1) {
            isContact = true;
        }
    }

    return (
        <div className="pt-12 px-4 lg:container mx-auto">
            {/* {isContact && (
                <div className="relative w-full h-48 mb-3">
                    <Image src="/city.jpg" alt="drawing" fill className="w-full h-full object-contain object-left" />
                </div>
            )} */}
            <header>
                <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">{removeAccents(pageContent?.fields?.title)}</h1>
            </header>
            <div className="py-8">
                <TextContent content={pageContent?.fields?.content} /> 
            </div>

            {isContact && (
                <div>
                    <div className="relative pb-[56.25%] h-0 overflow-hidden w-full border border-solid border-gray100">
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.469406065954!2d23.73637097631212!3d37.989510199760794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd35656d553f%3A0x44d12b2dc46c9e5b!2s82nd%20Kindergarten%20Athens!5e0!3m2!1sen!2sgr!4v1713091572074!5m2!1sen!2sgr'
                            className="absolute top-0 left-0 w-full h-full"
                            width='800'
                            height='600'
                            style={{ border:0 }}
                            allowFullScreen={false}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade' />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Page;

export const generateStaticParams = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'page',
    });

    const slugs = data.items.map((item: any) => ({
        page: item.fields.slug,
    }));
    return slugs;
};

export const dynamicParams = false;

export async function generateMetadata(
    { params }: { params: {
        page: string
    } },
): Promise<Metadata> {
    const data = await contentfulClient.getEntries({
        content_type: 'page',
        'fields.slug[match]': params.page,
    });

    const pageContent = data.items[0];

    return {
        title: pageContent?.fields?.title,
    };
}
  