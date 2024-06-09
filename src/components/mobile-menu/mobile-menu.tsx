'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

interface MobileMenuProps {
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

export const MobileMenu = ({
    pagesSubmenu,
    fundingsSubmenu,
}: MobileMenuProps) => {

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <PopoverButton className="relative z-20">
                        <span className="sr-only">Menu</span>
                        {open && (
                            <span><IoClose size={24} /></span>
                        )}
                        {!open && (
                            <span><IoMenu size={24} /></span>
                        )}
                    </PopoverButton>
                    <PopoverPanel className="fixed inset-0 z-10 bg-red-500 border-4 sm:border-8 border-solid border-white min-h-screen">
                        {({ close }) => (
                            <nav>
                                <ul className="p-6">
                                    <li>
                                        <Link
                                            href="/"
                                            className="whitespace-nowrap text-black hover:text-white inline-flex items-center justify-start gap-4 h-16 focus p-1"
                                            onClick={() => close()}
                                        >
                                            <div className="w-12 h-16 relative">
                                                <Image src="/drawing-5.png" alt="" fill className="w-full h-full object-contain" />
                                            </div>
                                            <span>82 Νηπιαγωγείο</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Disclosure>
                                            <DisclosureButton className="whitespace-nowrap text-black hover:text-white flex items-center justify-start gap-4 h-16 p-1 focus">
                                                <div className="w-12 h-14 relative">
                                                    <Image src="/drawing-1.png" alt="" fill className="w-full h-full object-contain" />
                                                </div>
                                                <span>{pagesSubmenu.title}</span>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                className="py-4 pl-16"
                                            >
                                                {pagesSubmenu.items.map((item) => (
                                                    <Link
                                                        key={item.title} href={item.url}
                                                        className="whitespace-nowrap py-1 block text-black hover:text-white"
                                                        onClick={() => close()}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </li>
                                    <li>
                                        <Link
                                            href="/nea"
                                            className="whitespace-nowrap text-black hover:text-white inline-flex items-center justify-start gap-4 h-16 focus p-1"
                                            onClick={() => close()}
                                        >
                                            <div className="w-12 h-16 relative">
                                                <Image src="/drawing-8.png" alt="" fill className="w-full h-full object-contain" />
                                            </div>
                                            <span>Νέα</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Disclosure>
                                            <DisclosureButton className="whitespace-nowrap text-black hover:text-white flex items-center justify-start gap-4 h-16 p-1 focus">
                                                <div className="w-12 h-14 relative">
                                                    <Image src="/drawing-9.png" alt="" fill className="w-full h-full object-contain" />
                                                </div>
                                                <span>{fundingsSubmenu.title}</span>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                className="py-4 pl-16"
                                            >
                                                {fundingsSubmenu.items.map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href={item.url}
                                                        className="whitespace-nowrap py-1 block text-black hover:text-white"
                                                        onClick={() => close()}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </li>
                                    <li>
                                        <Link
                                            href="/epikoinonia"
                                            className="whitespace-nowrap text-black hover:text-white inline-flex items-center justify-start gap-4 h-16 focus p-1"
                                            onClick={() => close()}
                                        >
                                            <div className="w-12 h-16 relative">
                                                <Image src="/drawing-3.png" alt="" fill className="w-full h-full object-contain" />
                                            </div>
                                            <span>Επικοινωνία</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </PopoverPanel> 
                </>
            )}
        </Popover>
    );
};
