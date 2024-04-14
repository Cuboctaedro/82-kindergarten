import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';
import { PageTitle } from '@/components/page-title/page-title';
import { TextContent } from '@/components/text-content/text-content';

const Page = ({
    params,
}: {
    params: {
        page: string
    }
}) => {
    const pageContent = fs.readFileSync(`./content/pages/${params.page}.md`, 'utf8');

    const pageData = matter.default(pageContent);

    return (
        <div className="bg-white shadow-02 p-6 mr-12">
            <div className="-mr-12 rotate-1 mt-3">
                <PageTitle>{pageData.data.title}</PageTitle>
            </div>
            <div className="pt-8">
                <TextContent content={pageData.content} />
            </div>
        </div>
    );
};

export default Page;

export const generateStaticParams = async () => {
    const pages = globSync('./content/pages/*.md');
  
    return pages.map((filename) => ({
        page: filename.split(path.sep)[2].split('.')[0],
    }));
};
