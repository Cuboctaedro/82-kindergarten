'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


interface MenuProps {
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

export const DesktopMenu = ({
    pagesSubmenu,
    fundingsSubmenu,
}: MenuProps) => {
    return (
        <nav>
            <ul className="flex flex-row items-start justify-start gap-8">
                <li>
                    <Menu>
                        <MenuButton className="whitespace-nowrap text-black flex items-center justify-start gap-4 h-16 ">
                            <div className="w-10 h-14 relative">
                                <Image src="/drawing-1.png" alt="drawing" fill className="w-full h-full object-contain" />
                            </div>
                            <span>{pagesSubmenu.title}</span>
                        </MenuButton>
                        <MenuItems
                            className="p-4 bg-white shadow-lg border border-solid border-gray-300 "
                            anchor={{
                                to: 'bottom',
                                gap: 16,
                            }}
                        >
                            {pagesSubmenu.items.map((item) => (
                                <MenuItem key={item.title}>
                                    <Link href={item.url} className="whitespace-nowrap py-1 block text-black hover:text-red-800"
                                    >
                                        {item.title}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </li>
                <li>
                    <Link
                        href="/nea"
                        className="whitespace-nowrap text-black flex items-center justify-start gap-4 h-16"
                    >
                        <div className="w-12 h-16 relative">
                            <Image src="/drawing-8.png" alt="drawing" fill className="w-full h-full object-contain" />
                        </div>
                        <span>Νέα</span>
                    </Link>
                </li>

                <li>
                    <Menu>
                        <MenuButton className="whitespace-nowrap text-black flex items-center justify-start gap-4 h-16">
                            <div className="w-10 h-14 relative">
                                <Image src="/drawing-3.png" alt="drawing" fill className="w-full h-full object-contain" />
                            </div>
                            <span>{fundingsSubmenu.title}</span>
                        </MenuButton>
                        <MenuItems
                            className="p-4 bg-white shadow-lg border border-solid border-gray-300 "
                            anchor={{
                                to: 'bottom',
                                gap: 16,
                            }}
                        >
                            {fundingsSubmenu.items.map((item) => (
                                <MenuItem key={item.title}>
                                    <Link href={item.url} className="whitespace-nowrap py-1 block text-black hover:text-red-800"
                                    >
                                        {item.title}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </li>
                <li>
                    <Link
                        href="/epikoinonia"
                        className="whitespace-nowrap text-black flex items-center justify-start gap-4 h-16"
                    >
                        <div className="w-10 h-16 relative">
                            <Image src="/drawing-2.png" alt="drawing" fill className="w-full h-full object-contain" />
                        </div>
                        <span>Επικοινωνία</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
