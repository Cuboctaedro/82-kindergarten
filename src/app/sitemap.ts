import { MetadataRoute } from 'next';
import { contentfulClient } from '@/fetch/contentful-client';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const map: MetadataRoute.Sitemap = [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/nea`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const pages = await contentfulClient.getEntries({
        content_type: 'page',
    });
    const pagesMap = pages.items.map((page: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${page.fields.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    }));

    const announcements = await contentfulClient.getEntries({
        content_type: 'announcement',
    });
    const announcementsMap = announcements.items.map((page: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/anakoinoseis/${page.fields.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    }));

    const fundings = await contentfulClient.getEntries({
        content_type: 'funding',
    });
    const fundingsMap = fundings.items.map((page: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/fundings/${page.fields.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    }));

    const posts = await contentfulClient.getEntries({
        content_type: 'blogPost',
    });
    const postsMap = posts.items.map((page: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/nea/${page.fields.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    }));

    return map.concat(pagesMap).concat(announcementsMap).concat(fundingsMap).concat(postsMap);
};

export default sitemap;
