import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';

const PostPage = ({
    params,
}: {
    params: {
        post: string
    }
}) => {
    const pageContent = fs.readFileSync(`./content/posts/${params.post}.md`, 'utf8');

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

export default PostPage;

export const generateStaticParams = async () => {
    const pages = globSync('./content/posts/.md');
  
    return pages.map((filename) => ({
        post: filename.split(path.sep)[2].split('.')[0],
    }));
};
