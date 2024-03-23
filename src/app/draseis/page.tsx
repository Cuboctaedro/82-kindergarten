import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Link from 'next/link';

const DraseisPage = async () => {
    const pages = await glob('./content/draseis/*.md');

    const items = [];

    for (let i = 0; i < pages.length; i++) {
        const pageContent = fs.readFileSync(pages[i], 'utf8');

        const pageData = matter.default(pageContent);

        items.push({ contents: pageData, filename: pages[i].split(path.sep)[2].split('.')[0] });
    }

    return (
        <div>
            <h1>Δράσεις</h1>

            <div>
                {items.map((item) => {
                    return (
                        <article key={item.contents.data.title}>
                            <h2>
                                <Link
                                    href={`/nea/${item.filename}`}
                                >
                                    {item.contents.data.title}
                                </Link>
                            </h2>
                        </article>
                    );
                })}
            </div>
        </div>

    );
};

export default DraseisPage;
