import { Announcements } from '@/components/announcements/announcements';
import { Post } from '@/components/post/post';
import { contentfulClient } from '@/fetch/contentful-client';
import Image from 'next/image';
import { Metadata } from 'next';

const Home = async () => {
    const blog = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-fields.publicationDate',
    });


    return (
        <>
            <header className="w-full px-4 xl:container md:mx-auto pt-8">
                <h1 className="sr-only">Αρχική σελίδα</h1>
                <div className="h-80 md:h-96 lg:h-[30rem] relative w-full ">
                    <Image src="/horizontal.jpg" fill alt="" className="w-full h-full object-cover object-top" />
                </div>
            </header>
            <div className="w-full px-4 xl:container md:mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-12 md:pt-24">
                <section className="col-span-1 md:col-span-2 xl:col-span-3 order-2 md:order-1">
                    <h2 className="sr-only">Νέα</h2>
                    {blog.items.map((item: any) => {
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

                <div className="col-span-1 order-1 md:order-2">
                    <Announcements />
                </div>
        
            </div>
        </>
    );
};

export default Home;

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Αρχική',
    };
}
  