import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import { PageTitle } from '@/components/page-title/page-title';
import { TextContent } from '@/components/text-content/text-content';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';

const AnouncementPage = ({
    params,
}: {
    params: {
        anakoinosi: string
    }
}) => {
    const pageContent = fs.readFileSync(`./content/anakoinoseis/${params.anakoinosi}.md`, 'utf8');

    const pageData = matter.default(pageContent);

    return (
        <div className="relative px-6  bg-white shadow-02 mr-12 ml-6">
            <div className="relative top-12 pb-6">

                <header className="-ml-12 rotate-1">
                    <PageTitle>{pageData.data.title}</PageTitle>
                </header>

                <div className=" -mr-12 bg-yellow-500 text-yellow-900 px-6 py-4 shadow-04 font-serif text-lg -rotate-1">
                    {format(pageData.data.date, 'd MMMM, y', { locale: el })}
                </div>
                
                <div className="py-12">
                    <TextContent content={pageData.content} />
                </div>
            </div>
        </div>
    );
};

export default AnouncementPage;

export const generateStaticParams = async () => {
    const pages = globSync('./content/anakoinoseis/*.md');
  
    return pages.map((filename) => ({
        drasi: filename.split(path.sep)[2].split('.')[0],
    }));
};
