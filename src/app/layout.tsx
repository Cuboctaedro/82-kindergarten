import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';
import { sourceSans } from '@/fonts/sans';
import { sourecSerif } from '@/fonts/serif';
import fs from 'fs';
import * as matter from 'gray-matter';
import './globals.css';


const RootLayout = ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: 'en' | 'el' }
}) => {
    const menuContent = fs.readFileSync('./content/data/menu.md', 'utf8');

    const menuData = matter.default(menuContent);

    console.log(menuData);

    return (
        <html lang={params.locale}>
            <body className={`${sourceSans.variable} ${sourecSerif.variable}`}>
                <Navbar />
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