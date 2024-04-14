import { PageTitle } from '@/components/page-title/page-title';
import { TextContent } from '@/components/text-content/text-content';
import fs from 'fs';
import * as matter from 'gray-matter';

const ContactPage = async () => {
    const pageContent = fs.readFileSync('./content/data/contact.md', 'utf8');

    const pageData = matter.default(pageContent);

    return (
        <>
            <article className="bg-white shadow-04 relative z-10 p-6 mr-12 ml-12">
                <header className="-mx-12 -rotate-2 mt-3">
                    <PageTitle>{pageData.data.title}</PageTitle>
                </header>
                <div className="pt-9">
                    <TextContent content={pageData.content} />
                </div>
            </article>
            <div className="-mt-6 relative z-0">
                <div className="shadow-04">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden w-full border border-solid border-gray100">
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.469406065954!2d23.73637097631212!3d37.989510199760794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd35656d553f%3A0x44d12b2dc46c9e5b!2s82nd%20Kindergarten%20Athens!5e0!3m2!1sen!2sgr!4v1713091572074!5m2!1sen!2sgr'
                            className="absolute top-0 left-0 w-full h-full"
                            width='800'
                            height='600'
                            style={{ border:0 }}
                            allowFullScreen={false}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
