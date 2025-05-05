'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AgrimLogo from "@/public/images/agrim_logo.svg"
import PlayLogoWhite from "@/public/images/play_logo_white.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="bg-transparent shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between h-16">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-gray-800"><Image src={AgrimLogo} height={50} width={147} alt='agrim_logo' /></Link>
                    </div>

                    {/* Center: Nav (desktop only) */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/about-us" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
                        <Link href="/retailer" className="text-gray-700 hover:text-blue-600 transition">Retailer</Link>
                        <Link href="/supplier" className="text-gray-700 hover:text-blue-600 transition">Supplier</Link>
                    </div>

                    {/* Right: Download Button */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="/download"
                            className="block bg-[var(--dark-green)] text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition"
                        >
                            <Image src={PlayLogoWhite} height={24} width={22} alt='agrim_logo' />
                        </a>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-gray-700 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'
                    }`}
            >
                <nav className="px-4 py-3 flex flex-col space-y-2">
                    <Link href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</Link>
                    <Link href="/retailer" className="text-gray-700 hover:text-blue-600">Retailer</Link>
                    <Link href="/supplier" className="text-gray-700 hover:text-blue-600">Supplier</Link>
                    <a
                        href="/download"
                        className="block bg-[var(--dark-green)] text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition"
                    >
                        <Image src={PlayLogoWhite} height={24} width={22} alt='agrim_logo' />
                    </a>
                </nav>
            </div>
        </header>
    );
}
