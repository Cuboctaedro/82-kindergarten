import { glob } from 'glob';
import path from 'path';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';
import { sourceSans } from '@/fonts/sans';
import { sourceSerif } from '@/fonts/serif';
import fs from 'fs';
import * as matter from 'gray-matter';
import './globals.css';
import { Announcements } from '@/components/announcements/announcements';
import { contentfulClient } from '@/fetch/contentful-client';


const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const menus = await contentfulClient.getEntries({
        content_type: 'menu',
    });

    console.log(menus.items[0].fields.menuItem);

    return (
        <html>
            <body className={`${sourceSans.variable} ${sourceSerif.variable} bg-top bg-repeat-y bg-contain bg-gray-100`}>
                <Navbar submenu={{
                    title: menus.items[0].fields.menuTitle,
                    items: menus.items[0].fields.menuItem.map((item: any) => ({
                        title: item.fields.title,
                        url: `/${item.fields.slug}`,
                    })),
                }} />
                <div className="w-full px-4 md:container md:mx-auto md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8 sm:pt-16">
                    <main className="col-span-1 md:col-span-2 lg:col-span-3 ">
                        {children}
                    </main>

                    {/* <aside className="col-span-1">
                        <Announcements items={anouncementsData.map((ann) => ({
                            title: ann.contents.data.title,
                            slug: ann.filename,
                        }))} />
                    </aside> */}
                    
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