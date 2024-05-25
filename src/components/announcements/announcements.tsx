import Link from 'next/link';

interface AnnouncementsProps {
    items: Array<{
        slug: string
        title: string
    }>
}
export const Announcements = ({
    items,
}: AnnouncementsProps) => {
    return (
        <aside className="bg-red-500 p-4 md:p-6 ">
            <h2 className="text-white font-serif uppercase tracking-wider text-2xl pb-4">Ανακοινωσεις</h2>
            <div>
                {items.map((item: any) => (
                    <article key={item.slug} className="border-t border-solid border-white/50 pt-1 pb-3">
                        <h3 className="font-sans leading-snug">
                            <Link
                                href={`/anakoinoseis/${item.slug}`}
                                className="text-black hover:text-white transition-colors"
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