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
        <div className="w-full flex items-center justify-center h-12 font-sans bg-white">
            <div className="w-full px-4 xl:container mx-auto flex flex-wrap gap-4 items-end justify-between">
                <div className="flex-none ">
                    <Link href="/" className="text-orange-500 font-bold">
                        82 Νηπιαγωγείο
                    </Link>
                </div>
                <Menu submenu={submenu} />
            </div>
        </div>
    );
};