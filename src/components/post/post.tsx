import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';

interface PostProps {
    title: string
    slug: string
    introduction: string
    publicationDate: string
    image: {
        url: string
        width: number
        height: number
    }
}

export const Post = ({
    title,
    slug,
    introduction,
    publicationDate,
    image,
}: PostProps) => {

    return (
        <article className="font-sans relative group aspect-w-1 aspect-h-1 w-full">
            <Link href={`/nea/${slug}`} className="">
                <div className="absolute inset-0 z-0">
                    <Image src={`https:${image.url}`} alt={title} fill className="w-full h-full object-cover transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-colors duration-500">
                    <div className="mx-3 mt-3 p-3 bg-white/100 group-hover:bg-white/70 transition-colors duration-500">
                        <h2 className="font-bold text-orange-500 ">
                            {title}
                        </h2>
                        <div className="text-sm font-medium py-1 text-gray-500">{format(new Date(publicationDate), 'd MMMM, y', { locale: el })}</div>
                        {/* <div className="max-w-2xl">{introduction}</div> */}
                    </div>
                </div>
                    
            </Link>
        </article>
    );
};