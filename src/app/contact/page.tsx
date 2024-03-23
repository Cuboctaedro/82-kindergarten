import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';

const ContactPage = async () => {
    const pageContent = fs.readFileSync('./content/data/contact.md', 'utf8');

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

export default ContactPage;
