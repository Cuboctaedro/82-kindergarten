import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';
import { fontSans } from '@/fonts/sans';
import { sourceSerif } from '@/fonts/serif';
import { Announcements } from '@/components/announcements/announcements';
import { contentfulClient } from '@/fetch/contentful-client';
import './globals.css';
import Image from 'next/image';


const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const menus = await contentfulClient.getEntries({
        content_type: 'menu',
    });

    const anouncements = await contentfulClient.getEntries({
        content_type: 'announcement',
        order: '-fields.publicationDate',
    });

    return (
        <html>
            <body className={`${fontSans.variable} ${sourceSerif.variable} font-sans bg-white border-4 sm:border-8 border-solid border-orange-500 min-h-screen`}>
                <Navbar submenu={{
                    title: menus.items[0].fields.menuTitle,
                    items: menus.items[0].fields.menuItem.map((item: any) => ({
                        title: item.fields.title,
                        url: `/${item.fields.slug}`,
                    })),
                }} />
                <div className="px-4">
                    <div className="w-full xl:container mx-auto xl:px-4">
                        <div className="h-80 relative w-full ">
                            <Image src="/markadoroi.jpg" fill alt="" className="w-full h-full object-cover" />

                        </div>
                    </div>
                </div>
                <div className="w-full px-4 xl:container md:mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
                    <main className="col-span-1 md:col-span-2 lg:col-span-3 ">
                        {children}
                    </main>

                    <div className="col-span-1">
                        <Announcements items={anouncements.items.map((item: any) => ({
                            title: item.fields.title,
                            slug: item.fields.slug,
                        }))} />
                    </div>
                    
                </div>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;

export function generateStaticParams() {
    const locales = ['en', 'el'];
    return locales.map((loc) => ({ locale: loc }));
}

export const generateMetadata = async () => ({
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '/'),
    title: {
        template: '%s | 82 Νηπιαγωγείο',
        default: '82ο Νηπιαγωγείο Αθηνών',
    },
    description: 'Ιστοσελίδα του 82ου Νηπιαγωγείου Αθηνών',
    alternates: {
        canonical:'/',
    },
    openGraph: {
        title: '82ο Νηπιαγωγείο Αθηνών',
        description: 'Ιστοσελίδα του 82ου Νηπιαγωγείου Αθηνών',
        url: '/',
        siteName: '82 Νηπιαγωγείο',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '82ο Νηπιαγωγείο Αθηνών',
        description: 'Ιστοσελίδα του 82ου Νηπιαγωγείου Αθηνών',
        siteId: process.env.NEXT_PUBLIC_TWITTER_SITE_ID,
        creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR,
        creatorId: process.env.NEXT_PUBLIC_TWITTER_CREATOR_ID,
        images: ['/hero.jpg'],
    },
});