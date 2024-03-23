import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '../menu/menu';

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-center py-6 font-sans bg-blue-500">
            <div className="w-full px-4 md:container mx-auto md:px-6 flex flex-wrap gap-4 md:gap-6 items-end justify-between">
                <div className="w-60 flex-none font-serif font-black text-2xl sm:text-3xl">
                    <Link href="/" className="text-red-500 hover:text-red-400 transition-colors">
                        82 Νηπιαγωγείο
                    </Link>

                </div>
                <Menu />
            </div>
        </div>
    );
};