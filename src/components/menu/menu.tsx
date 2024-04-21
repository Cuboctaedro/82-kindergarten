'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useOnClickOutside } from 'usehooks-ts';
import { MenuLink } from './menu-link';

interface MenuProps {
    submenu: {
        title: string
        items: Array<{
            title: string
            url: string
        }>
    }
}

export const Menu = ({
    submenu,
}: MenuProps) => {
    const ref = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    useOnClickOutside(ref, () => {
        setIsSubmenuOpen(false);
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
        <div ref={ref}>
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
            <nav className={`fixed inset-0 z-40 p-4 md:relative md:p-0 bg-orange-500 border-4 sm:border-8 md:border-none border-solid border-white md:bg-transparent ${isOpen ? 'block' : 'hidden md:block'}`}>
                <ul className="flex flex-col md:flex-row items-start justify-start gap-4">
                    <li className="md:hidden">
                        <Link
                            href="/"
                            className="whitespace-nowrap text-white font-bold"
                            onClick={() => { setIsOpen(false); }}
                        >
                            82 Νηπιαγωγείο
                        </Link>
                    </li>
                    <li>
                        <MenuLink
                            label="Νέα"
                            slug="nea"
                            isActive={isActive}
                            onClick={() => { setIsOpen(false); }}
                        />
                    </li>
                    {/* <li>
                        <MenuLink
                            label="Ανακοινώσεις"
                            slug="anakoinoseis"
                            isActive={isActive}
                        />
                    </li> */}
                    <li className="relative">
                        <button
                            className="whitespace-nowrap text-black"
                            onClick={() => {setIsSubmenuOpen(!isSubmenuOpen);}}
                        >
                            {submenu.title}
                        </button>
                        <div className={`grid ${isSubmenuOpen ? 'grid-rows-[1fr] md:shadow-md' : 'grid-rows-[0fr] shadow-none'} transition-all duration-300 overflow-hidden md:absolute top-6 md:bg-white`}>
                            <div className={`block transition-all duration-300 min-h-0 ${isSubmenuOpen ? 'visible' : 'invisible'}`}>
                                <ul className="p-4">
                                    {submenu.items.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.url}
                                                className=" whitespace-nowrap py-1 block"
                                                onClick={() => {
                                                    setIsSubmenuOpen(false);
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
                        <MenuLink
                            label="Χρηματοδοτήσεις"
                            slug="fundings"
                            isActive={isActive}
                            onClick={() => { setIsOpen(false); }}
                        />
                    </li>
                    <li>
                        <MenuLink
                            label="Επικοινωνία"
                            slug="epikoinonia"
                            isActive={isActive}
                            onClick={() => { setIsOpen(false); }}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};
