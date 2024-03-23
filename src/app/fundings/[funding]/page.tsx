import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';

const FundingPage = ({
    params,
}: {
    params: {
        funding: string
    }
}) => {
    const pageContent = fs.readFileSync(`./content/fundings/${params.funding}.md`, 'utf8');

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

export default FundingPage;

export const generateStaticParams = async () => {
    const pages = globSync('./content/fundings/*.md');
  
    return pages.map((filename) => ({
        drasi: filename.split(path.sep)[2].split('.')[0],
    }));
};
