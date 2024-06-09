import { contentfulClient } from '@/fetch/contentful-client';
import Link from 'next/link';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';

export const Announcements = async () => {
    const anouncements = await contentfulClient.getEntries({
        content_type: 'announcement',
        order: '-fields.publicationDate',
    });

    const items = anouncements.items.map((item: any) => ({
        title: item.fields.title,
        slug: item.fields.slug,
        date: item.fields.publicationDate,
    }));

    return (
        <aside className="bg-red-500 p-4 md:p-6 ">
            <h2 className="text-white font-serif uppercase tracking-wider text-2xl pb-4">Ανακοινωσεις</h2>
            <div>
                {items.map((item: any) => (
                    <article key={item.slug} className="border-t border-solid border-white/50 pt-1 pb-3">
                        <div className="font-sans uppercase py-1 text-white text-sm">{format(new Date(item.date), 'd MMMM, y', { locale: el })}</div>
                        <h3 className="font-sans leading-snug">
                            <Link
                                href={`/anakoinoseis/${item.slug}`}
                                className="text-black hover:text-white transition-colors p-1 focus block"
                            >
                                {item.title}
                            </Link>
                        </h3>
                    </article>
                ))}
            </div>
        </aside>
    );
};