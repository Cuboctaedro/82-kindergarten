import Link from 'next/link';
import { contentfulClient } from '@/fetch/contentful-client';

const FundingsPage = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'funding',
    });

    return (
        <div>
            <h1>Χρηματοδοτήσεις</h1>

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

export default FundingsPage;
