import { contentfulClient } from '@/fetch/contentful-client';
import { Post } from '@/components/post/post';

const NewsPage = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-fields.publicationDate',
    });


    return (
        <div>
            <header className="sr-only">
                <h1 className="text-white font-bold p-4 md:p-6">Νέα</h1>
            </header>
            <div>
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
                            />
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default NewsPage;
