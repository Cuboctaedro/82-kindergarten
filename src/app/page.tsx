import { Post } from '@/components/post/post';
import { contentfulClient } from '@/fetch/contentful-client';

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

    return (
        <div>
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
    );
};

export default Home;
