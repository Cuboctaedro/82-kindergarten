'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useOnClickOutside } from 'usehooks-ts';
import { MenuLink } from './menu-link';

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

export const Menu = ({
    pagesSubmenu,
    fundingsSubmenu,
}: MenuProps) => {
    const pagesRef = useRef(null);
    const fundingsRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const [isPagesSubmenuOpen, setIsPagesSubmenuOpen] = useState(false);
    const [isFundingsSubmenuOpen, setIsFundingsSubmenuOpen] = useState(false);

    useOnClickOutside(pagesRef, () => {
        setIsPagesSubmenuOpen(false);
    });

    useOnClickOutside(fundingsRef, () => {
        setIsFundingsSubmenuOpen(false);
    });

    const pathname = usePathname();

    const pathSegments = pathname.split('/');

    const isActive = (slug: string) => {
        if (Array.isArray(pathSegments) && pathSegments.length > 1) {
            return pathSegments[1] == slug;
        }
        return false;
    };
    
    return (
        <div className="">
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="w-6 h-6 flex items-center justify-center md:hidden relative z-50"
            >
                <span className="sr-only">Μενού</span>
                <span className={`w-6 h-6 flex items-center justify-center ${isOpen ? 'text-white' : 'text-orange-500'}`}>
                    {isOpen && (
                        <IoClose size="24" />
                    )}
                    {!isOpen && (
                        <IoMenu size="24" />
                    )}
                </span>
            </button>
            <nav className={`fixed inset-0 z-40 px-4 md:relative md:p-0 bg-orange-500 border-4 sm:border-8 md:border-none border-solid border-white md:bg-transparent ${isOpen ? 'block' : 'hidden md:block'}`}>
                <ul className="flex flex-col md:flex-row items-start justify-start gap-8">
                    <li className="md:hidden">
                        <Link href="/" className="text-white flex items-center justify-start gap-4">
                            <div className="w-10 h-16 relative">
                                <Image src="/drawing-1.png" alt="drawing" fill className="w-full h-full object-contain invert" />
                            </div>
                            <span>82 Νηπιαγωγείο</span>
                        </Link>
                    </li>
                    <li className="relative" ref={pagesRef} >
                        <button
                            className="whitespace-nowrap text-black flex items-center justify-start gap-4"
                            onClick={() => {setIsPagesSubmenuOpen(!isPagesSubmenuOpen);}}
                        >
                            <div className="w-10 h-16 relative">
                                <Image src="/drawing-4.png" alt="drawing" fill className="w-full h-full object-contain" />
                            </div>
                            <span>{pagesSubmenu.title}</span>
                        </button>
                        <div className={`grid ${isPagesSubmenuOpen ? 'grid-rows-[1fr] md:shadow-md' : 'grid-rows-[0fr] shadow-none'} transition-all duration-300 overflow-hidden md:absolute top-18 md:bg-white`}>
                            <div className={`block transition-all duration-300 min-h-0 ${isPagesSubmenuOpen ? 'visible' : 'invisible'}`}>
                                <ul className="p-4">
                                    {pagesSubmenu.items.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.url}
                                                className=" whitespace-nowrap py-1 block"
                                                onClick={() => {
                                                    setIsPagesSubmenuOpen(false);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="relative" ref={fundingsRef} >
                        <button
                            className="whitespace-nowrap text-black flex items-center justify-start gap-4"
                            onClick={() => {setIsFundingsSubmenuOpen(!isFundingsSubmenuOpen);}}
                        >
                            <div className="w-10 h-16 relative">
                                <Image src="/drawing-3.png" alt="drawing" fill className="w-full h-full object-contain" />
                            </div>
                            <span>{fundingsSubmenu.title}</span>
                        </button>
                        <div className={`grid ${isFundingsSubmenuOpen ? 'grid-rows-[1fr] md:shadow-md' : 'grid-rows-[0fr] shadow-none'} transition-all duration-300 overflow-hidden md:absolute top-18 md:bg-white`}>
                            <div className={`block transition-all duration-300 min-h-0 ${isFundingsSubmenuOpen ? 'visible' : 'invisible'}`}>
                                <ul className="p-4">
                                    {fundingsSubmenu.items.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.url}
                                                className=" whitespace-nowrap py-1 block"
                                                onClick={() => {
                                                    setIsPagesSubmenuOpen(false);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link
                            href="/epikoinonia"
                            className="whitespace-nowrap text-black flex items-center justify-start gap-4"
                            onClick={() => { setIsOpen(false); }}
                        >
                            <div className="w-10 h-16 relative">
                                <Image src="/drawing-2.png" alt="drawing" fill className="w-full h-full object-contain" />
                            </div>
                            <span>Επικοινωνία</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
