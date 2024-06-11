import Link from 'next/link';
import { contentfulClient } from '@/fetch/contentful-client';
import { Metadata, ResolvingMetadata } from 'next';

const FundingsPage = async () => {
    const data = await contentfulClient.getEntries({
        content_type: 'funding',
    });

    return (
        <div>
            <header>
                <h1 className="font-serif uppercase tracking-wider text-4xl text-red-500">Χρηματοδοτήσεις</h1>
            </header>
            <div>
                {data.items.map((item: any) => {

                    return (
                        <article key={item.fields.slug}>
                            <h2>
                                <Link href={`/fundings/${item.fields.slug}`}>
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

export async function generateMetadata(
    parent: ResolvingMetadata,
): Promise<Metadata> {

    return {
        title: 'Χρηματοδοτήσεις',
    };
}
  