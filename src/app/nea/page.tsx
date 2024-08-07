import { contentfulClient } from '@/fetch/contentful-client';
import { Post } from '@/components/post/post';
import { Announcements } from '@/components/announcements/announcements';
import { Metadata } from 'next';

const NewsPage = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-fields.publicationDate',
    });


    return (
        <div className="pt-12 px-4 lg:container mx-auto">
            <header>
                <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">Νέα</h1>
            </header>
            <div className="w-full xl:container md:mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-12 md:pt-24">
                <section className="col-span-1 md:col-span-2 xl:col-span-3">
                    <h2 className="sr-only">Νέα</h2>
                    <div>
                        {data.items.map((item: any) => {
                            const image = item.fields.coverImage.fields; 
                            // console.log(item.fields);
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

                </section>
                <div className="col-span-1">
                    <Announcements />
                </div>
            </div>
        </div>

    );
};

export default NewsPage;

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'Νέα',
    };
}
  