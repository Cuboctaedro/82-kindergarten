import Link from 'next/link';

interface MenuLinkProps {
    label: string
    slug: string
    isActive: (slug: string) => boolean
    onClick: React.MouseEventHandler<HTMLAnchorElement>
}

export const MenuLink = ({
    label,
    slug,
    isActive,
    onClick,
}: MenuLinkProps) => {

    return (
        <Link
            href={`/${slug}`}
            className={`whitespace-nowrap ${isActive(slug) ? 'text-white md:text-orange-500 font-bold' : 'text-black'}`}
            onClick={onClick}
        >
            {label}
        </Link>

    );
};