'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useOnClickOutside } from 'usehooks-ts';

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
    
    return (
        <>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="w-6 h-6 flex items-center justify-center sm:hidden relative z-50"
            >
                <span className="sr-only">Μενού</span>
                <span className="w-6 h-6 flex items-center justify-center">
                    {isOpen && (
                        <IoClose size="24" />
                    )}
                    {!isOpen && (
                        <IoMenu size="24" />
                    )}
                </span>
            </button>
            <nav className={`fixed inset-0 z-40 px-4 py-12 bg-orange-500 sm:static sm:p-0 sm:bg-transparent ${isOpen ? 'block' : 'hidden sm:block'}`}>
                <ul className="flex flex-col sm:flex-row items-start justify-start gap-4 font-medium">
                    <li>
                        <Link href="/nea" className="text-white hover:text-orange-100 text-lg whitespace-nowrap">Νέα</Link>
                    </li>
                    <li>
                        <Link href="/anakoinoseis" className="text-white hover:text-orange-100 text-lg whitespace-nowrap">Ανακοινώσεις</Link>
                    </li>
                    <li className="relative">
                        <button
                            className="text-white hover:text-orange-100 text-lg whitespace-nowrap"
                            onClick={() => {setIsSubmenuOpen(!isSubmenuOpen);}}
                        >
                            {submenu.title}
                        </button>
                        <div ref={ref} className={`grid ${isSubmenuOpen ? 'grid-rows-[1fr] shadow-04' : 'grid-rows-[0fr] shadow-none'} transition-all duration-300 overflow-hidden sm:absolute top-14 `}>
                            <ul className={`block transition-all duration-300 min-h-0 ${isSubmenuOpen ? 'visible' : 'invisible'} sm:p-4 sm:bg-orange-500`}>
                                {submenu.items.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={item.url}
                                            className="text-white hover:text-orange-100 sm:text-white sm:hover:text-orange-100 whitespace-nowrap py-1 block"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/draseis" className="text-white hover:text-orange-100 text-lg whitespace-nowrap">Δράσεις</Link>
                    </li>
                    <li>
                        <Link href="/fundings" className="text-white hover:text-orange-100 text-lg whitespace-nowrap">Χρηματοδοτήσεις</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-orange-100 text-lg whitespace-nowrap">Επικοινωνία</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
