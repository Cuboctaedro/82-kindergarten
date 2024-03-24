import Link from 'next/link';

interface AnnouncementsProps {
    items: Array<{
        title: string
        slug: string
    }>
}

export const Announcements = ({
    items,
}: AnnouncementsProps) => {
    return (
        <section className="w-full bg-blue-500">
            <h2 className="font-serif font-black text-3xl text-white p-4">Ανακοινώσεις</h2>
            <div className="">
                {items.map((item) => (
                    <article key={item.slug} className="p-4 border-t border-dashed border-white">
                        <h3 className="font-sans text-lg leading-snug">
                            <Link
                                href={`/anakoinoseis/${item.slug}`}
                                className="text-blue-1000 hover:text-blue-900 transition-colors"
                            >
                                {item.title}
                            </Link>
                        </h3>
                    </article>
                ))}
            </div>
        </section>
    );
};