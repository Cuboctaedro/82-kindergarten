import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';
import { fontSans } from '@/fonts/sans';
import { sourceSerif } from '@/fonts/serif';
import { contentfulClient } from '@/fetch/contentful-client';
import './globals.css';
import Script from 'next/script';


const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const menus = await contentfulClient.getEntries({
        content_type: 'menu',
    });

    // const anouncements = await contentfulClient.getEntries({
    //     content_type: 'announcement',
    //     order: '-fields.publicationDate',
    // });

    const fundings = await contentfulClient.getEntries({
        content_type: 'funding',
    });


    return (
        <html lang="el">
            <body className={`${fontSans.variable} ${sourceSerif.variable} font-sans bg-white border-4 sm:border-8 border-solid border-red-500 min-h-screen`}>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-536KFC7M" height="0" width="0" style={{ display: 'none', visibility:'hidden' }}></iframe></noscript>
                <Script id="gtm" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-536KFC7M');`}
                </Script>

                <Script
                    id="CookieDeclaration"
                    src="https://consent.cookiebot.com/ada15e86-76c5-4817-a31b-3a4147bbafa2/cd.js"
                    // type="text/javascript"
                />

                <Navbar
                    pagesSubmenu={{
                        title: menus.items[0].fields.menuTitle,
                        items: menus.items[0].fields.menuItem.map((item: any) => ({
                            title: item.fields.title,
                            url: `/${item.fields.slug}`,
                        })),
                    }}
                    fundingsSubmenu={{
                        title: 'Χρηματοδοτήσεις',
                        items: fundings.items.map((item: any) => ({
                            title: item.fields.title,
                            url: `/fundings/${item.fields.slug}`,
                        })),
                    }}
                />
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