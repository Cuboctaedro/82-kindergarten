import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '../menu/menu';

interface NavbarProps {
    pagesSubmenu: {
        title: string
        items: Array<{
            title: string
            url: string
        }>
    }
    fundingsSubmenu: {
        title: string
        items: Array<{
            title: string
            url: string
        }>
    }
}

export const Navbar = ({
    pagesSubmenu,
    fundingsSubmenu,
}: NavbarProps) => {

    return (
        <div className="w-full flex items-center justify-center h-20 py-2 font-sans">
            <div className="w-full px-4 xl:container mx-auto flex flex-wrap gap-4 items-center justify-between">
                <div className="flex-none ">
                    <Link href="/" className="text-gray-700 flex items-center justify-start gap-4">
                        <div className="w-10 h-16 relative">
                            <Image src="/drawing-5.png" alt="drawing" fill className="w-full h-full object-contain" />
                        </div>
                        <span>82 Νηπιαγωγείο</span>
                    </Link>
                </div>
                <Menu
                    pagesSubmenu={pagesSubmenu}
                    fundingsSubmenu={fundingsSubmenu}
                />
            </div>
        </div>
    );
};