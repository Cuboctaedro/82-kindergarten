import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { contentfulClient } from '@/fetch/contentful-client';
import Link from 'next/link';

const NewsPage = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'blogPost',
    });


    return (
        <div>
            <h1>Νέα</h1>

            <div>
                {data.items.map((item: any) => {

                    return (
                        <article key={item.fields.slug}>
                            <h2>
                                <Link href={`/nea/${item.fields.slug}`}>
                                    {item.fields.title}
                                </Link>
                            </h2>
                            {/* <div>{documentToReactComponents(item.fields.content)}</div> */}
                        </article>
                    );
                })}
            </div>
        </div>

    );
};

export default NewsPage;
