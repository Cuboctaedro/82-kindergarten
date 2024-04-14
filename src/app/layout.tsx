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


const RootLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: 'en' | 'el' }
}) => {
    const menuContent = fs.readFileSync('./content/data/menu.md', 'utf8');

    const menuData = matter.default(menuContent);

    const menuItems = [];

    for (let i = 0; i < menuData.data.pages.length; i++) {
        const pageContent = fs.readFileSync(`./content/pages/${menuData.data.pages[i]}.md`, 'utf8');

        const item = matter.default(pageContent);

        menuItems.push({
            url: `/${menuData.data.pages[i]}`,
            title: item.data.title,
        });
    }

    const anouncementsFiles = await glob('./content/anakoinoseis/*.md');

    const anouncementsData: Array<{ contents: matter.GrayMatterFile<string>, filename: string }> = [];

    for (let i = 0; i < anouncementsFiles.length; i++) {
        const pageContent = fs.readFileSync(anouncementsFiles[i], 'utf8');

        const item = matter.default(pageContent);

        anouncementsData.push({ contents: item, filename: anouncementsFiles[i].split(path.sep)[2].split('.')[0] });
    }

    return (
        <html lang={params.locale}>
            <body className={`${sourceSans.variable} ${sourceSerif.variable} bg-top bg-repeat-y bg-contain bg-gray-100`}>
                <Navbar submenu={{
                    title: menuData.data.title,
                    items: menuItems,
                }} />
                <div className="w-full px-4 md:container md:mx-auto md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8 sm:pt-16">
                    <main className="col-span-1 md:col-span-2 lg:col-span-3 ">
                        {children}
                    </main>

                    <aside className="col-span-1">
                        <Announcements items={anouncementsData.map((ann) => ({
                            title: ann.contents.data.title,
                            slug: ann.filename,
                        }))} />
                    </aside>
                    
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