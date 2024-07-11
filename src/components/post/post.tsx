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
    hLevel?: number
}

export const Post = ({
    title,
    slug,
    introduction,
    publicationDate,
    image,
    hLevel = 3,
}: PostProps) => {

    return (
        <article className="w-full flex items-center gap-6">
            <div className="h-32 w-32 relative overflow-hidden flex-none">
                <Image src={`https:${image.url}`} alt={title} fill className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                {hLevel == 3 && (
                    <h3 className="font-serif uppercase text-xl sm:text-2xl font-normal text-red-500 tracking-wider leading-none">
                        <Link href={`/nea/${slug}`} className="focus p-1">
                            {removeAccents(title)}
                        </Link>
                    </h3>
                )}
                {hLevel !== 3 && (
                    <h2 className="font-serif uppercase text-xl sm:text-2xl font-normal text-red-500 tracking-wider leading-none">
                        <Link href={`/nea/${slug}`} className="focus p-1">
                            {removeAccents(title)}
                        </Link>
                    </h2>
                )}
                <div className="text-sm font-medium py-1 text-gray-700">{format(new Date(publicationDate), 'd MMMM, y', { locale: el })}</div>
                <div className="text-sm font-medium py-1 text-gray-500 max-w-xl">
                    {introduction}
                </div>
            </div>
        </article>
    );
};