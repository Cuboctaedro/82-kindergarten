import { Announcements } from '@/components/announcements/announcements';
import { Post } from '@/components/post/post';
import { contentfulClient } from '@/fetch/contentful-client';
import Image from 'next/image';

const Home = async ({
    params,
}: {
    params: {
        locale: 'en' | 'el'
    }
}) => {
    const blog = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-fields.publicationDate',
    });

    const anouncements = await contentfulClient.getEntries({
        content_type: 'announcement',
        order: '-fields.publicationDate',
    });

    return (
        <>
            <div className="w-full px-4 xl:container md:mx-auto pt-8">
                <div className="h-80 md:h-96 lg:h-[30rem] relative w-full ">
                    <Image src="/horizontal.jpg" fill alt="" className="w-full h-full object-cover object-top" />

                </div>
            </div>
            <div className="w-full px-4 xl:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-12 md:pt-24">
                <main className="col-span-1 lg:col-span-2 xl:col-span-3">
                    <div  className="">
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
                    </div>

                </main>

                <div className="col-span-1">
                    <Announcements items={anouncements.items.map((item: any) => ({
                        title: item.fields.title,
                        slug: item.fields.slug,
                    }))} />
                </div>
        
            </div>
        </>
    );
};

export default Home;
