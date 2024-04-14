import Link from 'next/link';
import { Menu } from '../menu/menu';

interface NavbarProps {
    submenu: {
        title: string
        items: Array<{
            title: string
            url: string
        }>
    }
}

export const Navbar = ({
    submenu,
}: NavbarProps) => {
    return (
        <div className="w-full flex items-center justify-center py-6 font-sans bg-red-500 shadow-04">
            <div className="w-full px-4 md:container mx-auto md:px-6 flex flex-wrap gap-4 md:gap-6 items-end justify-between">
                <div className="w-64 flex-none font-serif font-black text-2xl sm:text-3xl">
                    <Link href="/" className="text-white">
                        82 Νηπιαγωγείο
                    </Link>

                </div>
                <Menu submenu={submenu} />
            </div>
        </div>
    );
};