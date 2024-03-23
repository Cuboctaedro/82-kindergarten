import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';

const ActionPage = ({
    params,
}: {
    params: {
        drasi: string
    }
}) => {
    const pageContent = fs.readFileSync(`./content/draseis/${params.drasi}.md`, 'utf8');

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

export default ActionPage;

export const generateStaticParams = async () => {
    const pages = globSync('./content/draseis/*.md');
  
    return pages.map((filename) => ({
        drasi: filename.split(path.sep)[2].split('.')[0],
    }));
};
