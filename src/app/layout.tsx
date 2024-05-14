import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';
import { fontSans } from '@/fonts/sans';
import { sourceSerif } from '@/fonts/serif';
import { contentfulClient } from '@/fetch/contentful-client';
import './globals.css';


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
            <body className={`${fontSans.variable} ${sourceSerif.variable} font-sans bg-gray-100 border-4 sm:border-8 border-solid border-white min-h-screen`}>
                <Navbar submenu={{
                    title: menus.items[0].fields.menuTitle,
                    items: menus.items[0].fields.menuItem.map((item: any) => ({
                        title: item.fields.title,
                        url: `/${item.fields.slug}`,
                    })),
                }} />
                <div>
                    {children}
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