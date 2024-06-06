import { contentfulClient } from '@/fetch/contentful-client';
import { Post } from '@/components/post/post';

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
            <div className="py-8">
                {data.items.map((item: any) => {
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
                                hLevel={2}
                            />
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default NewsPage;
