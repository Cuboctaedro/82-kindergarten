import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { removeAccents } from '@/helpers/remove-accents';

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
        <article className="w-full flex items-center gap-6">
            <Link href={`/nea/${slug}`} className="h-32 w-32 relative overflow-hidden flex-none">
                <Image src={`https:${image.url}`} alt={title} fill className="w-full h-full object-cover" />
            </Link>
            <div className="flex-1">
                <h2 className="font-serif uppercase text-xl sm:text-2xl font-normal text-orange-500 tracking-wider leading-none">
                    <Link href={`/nea/${slug}`} className="">
                        {removeAccents(title)}
                    </Link>
                </h2>
                <div className="text-sm font-medium py-1 text-gray-500">{format(new Date(publicationDate), 'd MMMM, y', { locale: el })}</div>

            </div>
        </article>
    );
};