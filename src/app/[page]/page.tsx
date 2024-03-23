import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';

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
        <div>
            <h1>{pageData.data.title}</h1>
            <div>
                <Markdown>{pageData.content}</Markdown>
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
