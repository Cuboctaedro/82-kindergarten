'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
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
            <nav className={`fixed inset-0 z-40 p-4 bg-blue-500 sm:static sm:p-0 sm:bg-transparent ${isOpen ? 'block' : 'hidden sm:block'}`}>
                <ul className="flex flex-col sm:flex-row items-start justify-start gap-4 font-bold">
                    <li>
                        <Link href="/nea" className="text-white text-lg whitespace-nowrap">Νέα</Link>
                    </li>
                    <li>
                        <Link href="/anakoinoseis" className="text-white text-lg whitespace-nowrap">Ανακοινώσεις</Link>
                    </li>
                    <li>
                        <button className="text-white text-lg whitespace-nowrap">Το σχολείο μας</button>
                    </li>
                    <li>
                        <Link href="/draseis" className="text-white text-lg whitespace-nowrap">Δράσεις</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white text-lg whitespace-nowrap">Επικοινωνία</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
